import os
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, field_validator

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=os.getenv("ALLOWED_ORIGINS", "*").split(","),
    allow_methods=["POST", "OPTIONS"],
    allow_headers=["*"],
)


class ContactForm(BaseModel):
    imie_nazwisko: str
    email: str
    telefon: str = ""
    wiadomosc: str

    @field_validator("imie_nazwisko", "email", "wiadomosc")
    @classmethod
    def not_empty(cls, v: str) -> str:
        if not v.strip():
            raise ValueError("Pole nie może być puste")
        return v.strip()

    @field_validator("telefon")
    @classmethod
    def clean_phone(cls, v: str) -> str:
        return v.strip()


@app.post("/send-contact")
async def send_contact(form: ContactForm):
    smtp_host = os.getenv("ZOHO_SMTP_HOST", "smtp.zoho.eu")
    smtp_port = int(os.getenv("ZOHO_SMTP_PORT", "587"))
    smtp_user = os.getenv("ZOHO_EMAIL")
    smtp_pass = os.getenv("ZOHO_PASSWORD")
    to_email = os.getenv("TO_EMAIL", smtp_user)

    if not smtp_user or not smtp_pass:
        raise HTTPException(status_code=500, detail="Brak konfiguracji SMTP")

    subject = f"Nowe zapytanie — CURIO od {form.imie_nazwisko}"

    body_text = (
        f"Nowe zapytanie z formularza CURIO\n\n"
        f"Imię i nazwisko: {form.imie_nazwisko}\n"
        f"E-mail: {form.email}\n"
        f"Telefon: {form.telefon or '—'}\n\n"
        f"Wiadomość:\n{form.wiadomosc}\n"
    )

    body_html = f"""<!DOCTYPE html>
<html>
<body style="font-family:sans-serif;color:#1a1a2e;max-width:600px;margin:0 auto;padding:24px;">
  <h2 style="color:#2f6bff;margin-bottom:4px;">Nowe zapytanie — CURIO</h2>
  <hr style="border:none;border-top:1px solid #e2ecfb;margin:16px 0;">
  <p><strong>Imię i nazwisko:</strong> {form.imie_nazwisko}</p>
  <p><strong>E-mail:</strong> <a href="mailto:{form.email}">{form.email}</a></p>
  <p><strong>Telefon:</strong> {form.telefon or '—'}</p>
  <hr style="border:none;border-top:1px solid #e2ecfb;margin:16px 0;">
  <p><strong>Wiadomość:</strong></p>
  <p style="background:#f5f8ff;padding:16px;border-radius:8px;white-space:pre-line;">{form.wiadomosc}</p>
</body>
</html>"""

    msg = MIMEMultipart("alternative")
    msg["Subject"] = subject
    msg["From"] = smtp_user
    msg["To"] = to_email
    msg["Reply-To"] = form.email
    msg.attach(MIMEText(body_text, "plain", "utf-8"))
    msg.attach(MIMEText(body_html, "html", "utf-8"))

    try:
        with smtplib.SMTP(smtp_host, smtp_port) as server:
            server.ehlo()
            server.starttls()
            server.login(smtp_user, smtp_pass)
            server.sendmail(smtp_user, to_email, msg.as_string())
    except smtplib.SMTPAuthenticationError:
        raise HTTPException(status_code=500, detail="Błąd autoryzacji SMTP — sprawdź hasło aplikacji Zoho")
    except smtplib.SMTPException as e:
        raise HTTPException(status_code=500, detail=f"Błąd SMTP: {e}")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

    return {"ok": True}

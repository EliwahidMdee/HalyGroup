# Haly Group enquiry API

Azure Functions (v4 programming model) used as the managed API of the Static Web App.

## Endpoints

| Method | Route | Purpose |
| --- | --- | --- |
| `GET` | `/api/health` | Health check |
| `POST` | `/api/enquiry` | Contact form submission |

The front end posts the same payload as before; no client changes are required.

## Environment variables

Set these in the Azure portal under **Static Web App → Settings → Environment variables**:

| Variable | Required | Purpose |
| --- | --- | --- |
| `SMTP_HOST` | yes | SMTP server host |
| `SMTP_PORT` | yes | `587` (STARTTLS) or `465` (implicit TLS) |
| `SMTP_USER` | yes | SMTP username |
| `SMTP_PASS` | yes | SMTP password |
| `SMTP_FROM` | no | From address; defaults to `SMTP_USER` |
| `ENQUIRY_TO` | no | Recipient; defaults to `office@halygroupltd.com` |

If SMTP is not configured or sending fails, the function returns an error so the
visitor is asked to call or email instead of the enquiry being silently lost.

## Local development

The Express server in `../server` remains the local development API. To run the
Functions version locally with the built front end:

```bash
cd ..
npm run build
npx swa start dist --api-location api
```

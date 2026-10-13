# OctoFit API configuration

In Codespaces, define `VITE_CODESPACE_NAME` in
`octofit-tracker/frontend/.env.local` so the frontend can reach the backend API:

```dotenv
VITE_CODESPACE_NAME=your-codespace-name
```

The API URL is `https://<VITE_CODESPACE_NAME>-8000.app.github.dev`. Restart
Vite after changing `.env.local`; Vite reads these variables at startup.
When `VITE_CODESPACE_NAME` is unset or blank, the frontend uses
`http://localhost:8000`.

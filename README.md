# gayeffelle


richmond st leonards hackathon

## quick start

### frontend

Spin up the UI by running the following from `./frontend/src`:

```bash
npm run dev
```

### backend

prerequisites:

1. docker daemon up and running!
2. supabase installed:
   `brew install supabase/tap/supabase`

start up the server:

1. `cd backend`
2. `supabase start`
3. `./gradlew bootRun`

#### pointing at your own database

By default the backend connects to the local `supabase start` instance. To use a
different database (a teammate's, a shared cloud Supabase project, etc.) create a
git-ignored `.env` file in `backend/` — no need to edit any tracked config:

```bash
cd backend
cp .env.example .env
# edit .env with your DATASOURCE_URL / DATASOURCE_USERNAME / DATASOURCE_PASSWORD
```

The same variables also work as plain environment variables if you prefer
(`DATASOURCE_URL=... ./gradlew bootRun`).

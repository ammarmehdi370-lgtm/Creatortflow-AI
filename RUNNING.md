# Running locally

1. Start PostgreSQL and create a database named `creatorflow`.
2. Start Redis or Memurai on port `6379`.
3. Copy `.env.example` to `.env.local` and set `DATABASE_URL` and `REDIS_URL`.
4. Run `npm.cmd install`, then `npm.cmd run db:generate` and `npm.cmd run db:push`.
5. Start the app with `npm.cmd run dev`.
6. Check `http://localhost:3000/api/health`.

On Windows, PostgreSQL service names may be `postgresql-x64-18`; Memurai installs as `Memurai`.

## Windows installation

Install only missing requirements from an elevated PowerShell or Windows Terminal:

```powershell
winget install --id Git.Git -e
winget install --id OpenJS.NodeJS.LTS -e
winget install --id PostgreSQL.PostgreSQL.16 -e
winget install --id Memurai.MemuraiDeveloper -e
winget install --id Gyan.FFmpeg.Shared -e
winget install --id Microsoft.VisualStudioCode -e
```

PostgreSQL 18 and Memurai are both compatible with the foundation requirements of PostgreSQL 16+ and Redis 7+.

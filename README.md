# CreatorFlow AI

CreatorFlow AI is a modular Next.js monolith for producing YouTube-ready videos: script, scenes, media, voice, captions, timeline editing, rendering, thumbnails, SEO, and publishing preparation.

## Requirements

- Node.js 20+
- npm
- PostgreSQL 16+
- Redis 7+ or Memurai on Windows
- FFmpeg 6+

See [RUNNING.md](RUNNING.md) for setup and [ARCHITECTURE.md](ARCHITECTURE.md) for boundaries.

## Quick start

```powershell
npm.cmd install
Copy-Item .env.example .env.local
npm.cmd run db:generate
npm.cmd run dev
```

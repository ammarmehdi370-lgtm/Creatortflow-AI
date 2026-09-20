# Development

## Commands

- `npm.cmd run dev`: development server
- `npm.cmd run build`: production build
- `npm.cmd run start`: production server
- `npm.cmd run lint`: ESLint
- `npm.cmd run typecheck`: TypeScript
- `npm.cmd test`: Vitest
- `npm.cmd run test:watch`: Vitest watch mode
- `npm.cmd run db:generate`: Prisma client
- `npm.cmd run db:push`: apply schema without migration
- `npm.cmd run db:migrate`: create/apply migration
- `npm.cmd run db:studio`: Prisma Studio
- `npm.cmd run worker:render`: render worker

## FFmpeg

Set `FFMPEG_PATH` to `ffmpeg` when it is on PATH, or to the absolute executable path on Windows. Rendering is not required for the app shell to boot.

## Testing

Duration, validation, environment, and health endpoint tests are included. Keep feature tests near the owning module.

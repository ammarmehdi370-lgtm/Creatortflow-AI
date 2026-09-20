# Architecture

The app is a modular Next.js monolith.

`src/app` contains pages and API route handlers. Route handlers validate input, establish authentication, and call services. Services contain product workflows. Repositories will own Prisma persistence as workflows grow. `src/config` owns shared product configuration, including the single duration definition. `src/workers` contains BullMQ workers for background rendering and media processing.

Request path: Frontend -> route handler -> Zod validation -> authentication -> service -> repository -> Prisma -> PostgreSQL.

Background path: API -> BullMQ -> Redis -> worker -> FFmpeg/media processing.

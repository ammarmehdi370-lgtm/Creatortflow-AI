import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  DATABASE_URL: z.string().url().optional(),
  REDIS_URL: z.string().url().optional(),
  NEXT_PUBLIC_APP_URL: z.string().url().default('http://localhost:3000'),
  FFMPEG_PATH: z.string().default('ffmpeg'),
  RENDER_OUTPUT_DIR: z.string().default('./.data/renders')
});

export const env = envSchema.parse({
  NODE_ENV: process.env.NODE_ENV,
  DATABASE_URL: process.env.DATABASE_URL,
  REDIS_URL: process.env.REDIS_URL,
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  FFMPEG_PATH: process.env.FFMPEG_PATH,
  RENDER_OUTPUT_DIR: process.env.RENDER_OUTPUT_DIR
});

export function hasDatabaseConfig(): boolean { return Boolean(env.DATABASE_URL); }
export function hasRedisConfig(): boolean { return Boolean(env.REDIS_URL); }

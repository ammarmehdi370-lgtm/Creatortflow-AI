import { prisma } from '@/lib/prisma';
import { env } from '@/lib/env';
import { Redis } from 'ioredis';

export type HealthStatus = { application: 'ok'; database: 'ok' | 'error' | 'not_configured'; redis: 'ok' | 'error' | 'not_configured'; renderer: 'ok' | 'not_configured' };

export async function getHealthStatus(): Promise<HealthStatus> {
  const database = env.DATABASE_URL ? await prisma.$queryRaw`SELECT 1`.then(() => 'ok' as const).catch(() => 'error' as const) : 'not_configured';
  const redis = env.REDIS_URL ? await new Redis(env.REDIS_URL).ping().then(() => 'ok' as const).catch(() => 'error' as const) : 'not_configured';
  return { application: 'ok', database, redis, renderer: env.FFMPEG_PATH ? 'ok' : 'not_configured' };
}

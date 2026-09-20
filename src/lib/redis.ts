import { Redis } from 'ioredis';

let client: Redis | undefined;

export function getRedis(): Redis {
  if (!process.env.REDIS_URL) throw new Error('REDIS_URL is not configured');
  client ??= new Redis(process.env.REDIS_URL, { maxRetriesPerRequest: null });
  return client;
}

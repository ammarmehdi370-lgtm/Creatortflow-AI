import { describe, expect, it } from 'vitest';
import { env, hasDatabaseConfig } from './env';

describe('environment configuration', () => {
  it('boots without external API keys', () => expect(env.NEXT_PUBLIC_APP_URL).toBe('http://localhost:3000'));
  it('reports optional database configuration', () => expect(typeof hasDatabaseConfig()).toBe('boolean'));
});

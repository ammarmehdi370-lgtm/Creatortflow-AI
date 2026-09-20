import { describe, expect, it, vi } from 'vitest';
import { GET } from './route';

vi.mock('@/services/health.service', () => ({ getHealthStatus: vi.fn().mockResolvedValue({ application: 'ok', database: 'not_configured', redis: 'not_configured', renderer: 'ok' }) }));

describe('GET /api/health', () => {
  it('returns non-secret service status', async () => {
    const response = await GET();
    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ application: 'ok', database: 'not_configured', redis: 'not_configured', renderer: 'ok' });
  });
});

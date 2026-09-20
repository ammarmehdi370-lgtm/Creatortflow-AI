import { NextResponse } from 'next/server';
import { getHealthStatus } from '@/services/health.service';

export async function GET() {
  const health = await getHealthStatus();
  const healthy = health.database !== 'error' && health.redis !== 'error';
  return NextResponse.json(health, { status: healthy ? 200 : 503 });
}

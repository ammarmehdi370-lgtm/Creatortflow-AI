import { NextResponse } from 'next/server';
import { createProjectSchema } from '@/lib/validation';

export async function POST(request: Request) {
  const parsed = createProjectSchema.safeParse(await request.json());
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  return NextResponse.json({ message: 'Project creation service is ready', project: parsed.data }, { status: 201 });
}

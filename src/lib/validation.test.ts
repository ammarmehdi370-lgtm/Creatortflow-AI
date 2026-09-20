import { describe, expect, it } from 'vitest';
import { createProjectSchema } from './validation';

describe('project validation', () => {
  it('accepts a valid project', () => expect(createProjectSchema.safeParse({ name: 'Launch video', durationSeconds: 60 }).success).toBe(true));
  it('rejects an invalid duration', () => expect(createProjectSchema.safeParse({ name: 'Launch video', durationSeconds: 2 }).success).toBe(false));
});

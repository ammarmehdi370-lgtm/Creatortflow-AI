import { z } from 'zod';
import { MAX_CUSTOM_DURATION_SECONDS, MIN_CUSTOM_DURATION_SECONDS, VIDEO_DURATIONS } from '@/config/duration';

export const createProjectSchema = z.object({
  name: z.string().trim().min(1).max(120),
  durationSeconds: z.number().int().refine((value) => VIDEO_DURATIONS.includes(value as never) || (value >= MIN_CUSTOM_DURATION_SECONDS && value <= MAX_CUSTOM_DURATION_SECONDS), 'Invalid video duration')
});

export type CreateProjectInput = z.infer<typeof createProjectSchema>;

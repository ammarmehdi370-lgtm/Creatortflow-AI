export const VIDEO_DURATIONS = [15, 30, 60, 90, 120, 180, 300, 600] as const;
export type VideoDuration = (typeof VIDEO_DURATIONS)[number];
export type DurationSelection = VideoDuration | { customSeconds: number };

export const MIN_CUSTOM_DURATION_SECONDS = 5;
export const MAX_CUSTOM_DURATION_SECONDS = 3600;

export function isSupportedDuration(seconds: number): boolean {
  return VIDEO_DURATIONS.includes(seconds as VideoDuration) ||
    (Number.isInteger(seconds) && seconds >= MIN_CUSTOM_DURATION_SECONDS && seconds <= MAX_CUSTOM_DURATION_SECONDS);
}

export function assertValidDuration(seconds: number): asserts seconds is number {
  if (!isSupportedDuration(seconds)) throw new Error(`Unsupported video duration: ${seconds} seconds`);
}

export function formatDuration(seconds: number): string {
  assertValidDuration(seconds);
  const minutes = Math.floor(seconds / 60);
  const remainder = seconds % 60;
  return minutes > 0 ? `${minutes}:${remainder.toString().padStart(2, '0')}` : `${remainder}s`;
}

export function secondsToMilliseconds(seconds: number): number {
  assertValidDuration(seconds);
  return seconds * 1000;
}

export type ContentBudget = { words: number; scenes: number; secondsPerScene: number };

export function durationToContentBudget(seconds: number): ContentBudget {
  assertValidDuration(seconds);
  const scenes = Math.max(1, Math.ceil(seconds / 10));
  return { words: Math.round(seconds * 2.25), scenes, secondsPerScene: seconds / scenes };
}

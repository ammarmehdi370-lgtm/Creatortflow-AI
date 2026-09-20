import { describe, expect, it } from 'vitest';
import { durationToContentBudget, formatDuration, secondsToMilliseconds } from './duration';

describe('duration utilities', () => {
  it('formats supported durations', () => expect(formatDuration(90)).toBe('1:30'));
  it('converts seconds to milliseconds', () => expect(secondsToMilliseconds(30)).toBe(30000));
  it('creates a content budget', () => expect(durationToContentBudget(60)).toEqual({ words: 135, scenes: 6, secondsPerScene: 10 }));
});

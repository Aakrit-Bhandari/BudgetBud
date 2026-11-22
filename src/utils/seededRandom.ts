/**
 * Returns a deterministic pseudo-random function for a given seed.
 * Calling the result with the same index always gives the same number in [0, 1).
 */
export function createSeededRandom(seed: number): (index: number) => number {
  return (index: number) => {
    const raw = Math.sin(index * 12.9898 + seed * 78.233) * 43758.5453;
    return raw - Math.floor(raw);
  };
}

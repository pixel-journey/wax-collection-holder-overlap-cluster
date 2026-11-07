/**
 * Jaccard on two caller-supplied account lists.
 * Nothing is fetched. Duplicate names count once.
 */

const NAME = /^(?!.*\.\.)(?!\.)(?!.*\.$)[a-z1-5.]{1,12}$/;

export type Jaccard =
  | { ok: false; reason: string }
  | { ok: true; intersection: number; union: number; score: number };

function unique(label: string, names: readonly string[]): { ok: false; reason: string } | { ok: true; set: Set<string> } {
  if (names.length < 1 || names.length > 64) {
    return { ok: false, reason: `${label} must list 1 to 64 accounts` };
  }
  const set = new Set<string>();
  for (const name of names) {
    if (!NAME.test(name)) return { ok: false, reason: `${name} is not an account` };
    set.add(name);
  }
  return { ok: true, set };
}

export function jaccard(left: readonly string[], right: readonly string[]): Jaccard {
  const a = unique("left", left);
  if (!a.ok) return a;
  const b = unique("right", right);
  if (!b.ok) return b;
  let intersection = 0;
  for (const name of a.set) if (b.set.has(name)) intersection += 1;
  const union = a.set.size + b.set.size - intersection;
  return { ok: true, intersection, union, score: intersection / union };
}

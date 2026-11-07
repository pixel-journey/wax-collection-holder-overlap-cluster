# Education — two lists, one ratio

> **Rung:** `npm test` runs `src/jaccard.test.ts`. `app/page.tsx` is not that function.  
> **The test is the rule.**

## What you should be able to do

| Level | After this file |
| --- | --- |
| Beginner | Score `{alice, bob}` against `{bob, carol}` |
| Intermediate | See why the page button is not this score |
| Masterclass | Say why a holder airdrop still needs a block, not a ratio |

---

## Beginner — one scene

```ts
jaccard(["alice", "bob", "bob"], ["bob", "carol"])
// { ok: true, intersection: 1, union: 3, score: 1/3 }
```

`bob` is listed twice on the left and counts once. The same set scores `1`. Two different accounts score `0`.

Names use the same shape as the wash lab: `a-z`, `1-5`, and dots, 1–12 characters, no empty or doubled dots. `Alice` is refused. An empty list is refused. A list of 65 names is refused before the sets are built, even if every name is `bob`.

### Predict, then run

```bash
npm test
```

---

## Intermediate — the button is noise

`app/page.tsx` `analyzeOverlap` does not call `jaccard`. It draws `Math.random()` between 25 and 64 and writes "Interactive D3 Graph Would Render Here". There is no D3 import and no Web Worker in this tree.

A percentage on that page is not `|A ∩ B| / |A ∪ B|`.

### Attack → test

| Attack | Naive code | This lab | Test |
| --- | --- | --- | --- |
| Count a repeated name twice | Union grows | set semantics | `bob` twice, union 3 |
| Fetch holders inside the function | Looks live | arguments only | no host in `jaccard.ts` |
| Trust the Analyze button | A similarity appears | `Math.random`, not `jaccard` | the page was not executed |

---

## Masterclass — overlap is not an airdrop

AtomicAssets v2 still has owners. It does not have the old `holders` custodial table, and it does not pay holders. A ratio of two lists does not pay anyone.

If you later airdrop, take owners at a named block and split the pool with `equalSplit` in `wax-nft-backed-token-unlock-visualizer`. Missed days do not multiply that pool (`duePayout`). This file does not fetch those owners. Sixty-four names is a lesson cap, not a collection.

### What this course will not teach

- A force-directed graph
- An AtomicAssets accounts query
- That the page and `jaccard` agree

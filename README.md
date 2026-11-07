# Shared accounts, divided by the union

**Trust label:** `educational-reference`  
**Catalog:** [wax-ecosystem-blueprint-catalog](https://github.com/pixel-journey/wax-ecosystem-blueprint-catalog)

`alice`+`bob` against `bob`+`carol` is `1/3`. The Analyze button is not this function.

The course is [EDUCATION.md](EDUCATION.md).

## What is true (executed)

| Rule | Result |
| --- | --- |
| `["alice","bob","bob"]` vs `["bob","carol"]` | intersection 1, union 3, score 1/3 |
| Same set | score 1 |
| No shared name | score 0 |
| Empty list, 65 names, or `Alice` | `ok: false` with a reason |

Lists are arguments. Nothing is fetched. Duplicate names count once. The cap is 64 names per side.

## What the page does instead

`app/page.tsx` labels itself Jaccard and then calls `Math.random()`. There is no D3 graph and no worker. Do not quote a percentage from that button.

## AtomicAssets v2

Owner lists for a real overlap or airdrop belong to a block you name. This function does not call `/atomicassets/v1/accounts`. v2 also removed the custodial `holders` table. A ratio is not a payment. Pool splits live in [wax-nft-backed-token-unlock-visualizer](https://github.com/pixel-journey/wax-nft-backed-token-unlock-visualizer).

```bash
npm test
```

MIT — Pixel Journey

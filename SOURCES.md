# Sources

| Source | Use |
| --- | --- |
| [docs.wax.io](https://docs.wax.io/) | Account name shape on WAX |
| [atomic-knowledge](https://github.com/atomicassets/atomic-knowledge) | Owners are chain state. This function does not read them |
| [src/jaccard.ts](src/jaccard.ts) | The rule `npm test` runs |

## Locked by tests

- `jaccard(["alice","bob","bob"], ["bob","carol"])` → intersection **1**, union **3**, score **1/3**.
- The same set scores **1**. Disjoint sets score **0**.
- Each side is 1..64 names. 65 is refused before the sets are built.
- `Alice` is refused. Names are `a-z`, `1-5`, and dots, length 1..12, no empty or doubled dots.
- Nothing is fetched.

## The button is the lesson, not the rule

`app/page.tsx` `analyzeOverlap` calls `Math.random()` and mentions a D3 graph that is not imported. [EDUCATION.md](EDUCATION.md) teaches that mismatch. Do not quote a percentage from the button. Do not delete the button without rewriting that lesson.

## Portability

Jaccard on two account lists is not WAX-specific. The name regex is the Antelope account shape. A holder list from EOS or Telos uses the same function. Fetching those holders is a different product, and it still needs a named block.

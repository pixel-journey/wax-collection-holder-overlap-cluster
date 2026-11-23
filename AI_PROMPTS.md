# AI handoff — holder Jaccard

## Non-negotiables

1. `jaccard(["alice","bob","bob"], ["bob","carol"])` → intersection **1**, union **3**, score **1/3**.
2. The same set scores **1**. Disjoint sets score **0**.
3. Each side is 1..64 names. 65 is refused before the sets are built.
4. `Alice` is refused. Names are `a-z`, `1-5`, and dots, length 1..12, no empty or doubled dots.
5. Nothing is fetched. Quote the function, not the page button.
6. `app/page.tsx` `analyzeOverlap` calls `Math.random()` and mentions a D3 graph that is not imported. That mismatch is the lesson. Do not delete the button without rewriting EDUCATION.md.

## Prompt seeds

- "Jaccard of those two lists — intersection, union, score."
- "Why must an agent ignore the button's percentage?"
- "65 names — refused before the sets exist?"

## Do not

- Read AtomicAssets owners inside unit tests.
- Report a random percentage as the Jaccard score.

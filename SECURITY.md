# Security — holder overlap

## Closed in tests

| Issue | Behavior |
| --- | --- |
| Sample lists | intersection 1, union 3, score 1/3 |
| Identical sets | score 1 |
| Disjoint sets | score 0 |
| 65 names | refused before sets are built |
| `Alice` / bad dots | refused |

## Not closed

| Concern | Guidance |
| --- | --- |
| Live holders | Not read |
| Page button | Uses `Math.random()`; not the rule |

## Attack angles

1. Publishing the button percentage as overlap.  
2. Fetching holders and calling the unit test a chain proof.  
3. Deleting the misleading button without updating the lesson that teaches the mismatch.

## Honesty limits

Pure Jaccard. Antelope name shape. No network.

[docs.wax.io](https://docs.wax.io/)

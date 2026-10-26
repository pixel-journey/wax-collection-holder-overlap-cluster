# API usage for holder overlap

Jaccard similarity needs both full holder sets. A page of holders is not the set. Do not draw a partnership score from page 1.

## The endpoint, and the limit

```http
GET https://wax.api.atomicassets.io/atomicassets/v1/accounts?collection_name=pixeljourney&page=1&limit=1
```

That URL returned 200 on 2026-10-26. Docs: [AtomicAssets](https://docs.wax.io/apis/atomic-api.htm).

`limit=1` is the sample, not a suggested crawl. To walk holders you page, you wait between calls, and you stop when the person has what they asked for. Two collections means two lists, not one call per holder on both sides.

The local ratio already tested in `wax-ecosystem-affinity-bubble-map` is "2 shared of a union of 4 is 5000 bps", and it is not a map. Use that only on ids you actually hold in memory. `wax-cross-game-achievement-overlay` intersects two id lists the same way. Neither one queries a collection.
## Shared rules

This file does not send the requests. The README and any page already in the repo were not replaced. The tested request builder is [wax-public-endpoint-failover](https://github.com/pixel-journey/wax-public-endpoint-failover) (`docs/USAGE-EXAMPLES.md`).

- One family, one list, at most five https origins. Walk in order. Stop at the first success. A custom origin is allowed. `http` is only for localhost.
- Trust a chain or history host only after `chain_id` is `1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4`.
- On 2026-10-25 a host with a healthy `/v2/health` still 404'd `get_actions`. Keep a history list separate from the chain list.
- If `more` is true, continue with `lower_bound` set to `next_key`. Do not drop `limit`.
- Cache an ABI. Do not poll during a frame, a slider drag, or a camera preview. Alcor HTTP 429 means wait.
- Producer health is [EOS Nation](https://validate.eosnation.io/wax/producers/), [Validationcore](https://wax.validationcore.io/reports/nodes/api), and [status.wax.io](https://status.wax.io/).

Figures below are a check on 2026-10-26, not a promise the hosts stay up.

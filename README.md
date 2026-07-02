# wax-collection-holder-overlap-cluster — Collection Holder Overlap Cluster

> **Status:** ✅ **FULL PX PERFECTION (Alpha-Ready)** | July 2026  
> **Category:** Community Analytics & Audience Clustering  
> **Parent Catalog:** [pixel-journey/wax-ecosystem-blueprint-catalog](https://github.com/pixel-journey/wax-ecosystem-blueprint-catalog)
> **Benchmark:** gkniftyheads-tracker + Pixel Journey PX Perfection Standard v1.0

**Goal:** An interactive force-directed network graph that reveals audience congruence between WAX NFT collections using Jaccard similarity on holder sets. Helps projects discover shared collectors, partnership opportunities, and true ecosystem relationships.

---

## Educational Core (Why This Exists)

Project teams on WAX often guess which other collections share their audience. Raw holder data is public but hard to interpret at scale. This tool turns that data into clear, visual proof of overlapping communities.

**Common Pitfalls This Tool Addresses**:
- Relying on intuition instead of data for partnerships
- Missing cross-collection synergies
- Overwhelming stakeholders with raw holder lists instead of insights
- Building in isolation without understanding the broader ecosystem

**Learning Outcomes**:
After studying this blueprint, you should be able to:
- Calculate and interpret Jaccard similarity for audience overlap
- Build interactive network visualizations with D3
- Use Web Workers for heavy client-side computation
- Design tools that turn public blockchain data into actionable community insights

---

## Tech Recommendations Matrix

| Component             | Recommended                     | Alternative              | Why Chosen                                      | When to Choose Alternative          |
|-----------------------|---------------------------------|--------------------------|-------------------------------------------------|-------------------------------------|
| Graph Visualization   | D3 force-directed               | React Flow / Cytoscape   | Maximum control + performance for dense graphs  | When you need faster development    |
| Overlap Calculation   | Jaccard + Web Worker            | Server-side calculation  | Transparent, private, educational               | When you need heavier ML clustering |
| Data Source           | AtomicAssets v2 accounts        | Hyperion                 | Direct, efficient holder fetching               | When you need deeper historical data|

---

## Machine-Optimized Spec (spec.yaml)

```yaml
blueprint:
  id: wax-collection-holder-overlap-cluster
  tier: community-analytics
  status: alpha-ready
  benchmark_target: PX-Perfection-Standard-v1.0

features:
  - jaccard_similarity_network_graph
  - force_directed_d3_visualization
  - multi_collection_overlap_analysis
  - interactive_forensic_dashboard

recommended_stack:
  viz: D3 force-directed
  computation: Jaccard + Web Worker
  data: AtomicAssets v2 accounts

machine_instructions:
  - "Build interactive force-directed graph using D3 for collection holder overlap"
  - "Implement Jaccard similarity calculation in Web Worker"
  - "Create clear educational UI with tooltips and filtering"
  - "Add multi-collection mode and export capabilities"
```

---

## Ecosystem Synergy

This tool pairs extremely well with:
- `wax-account-sybil-distance-scorer` — Combine audience overlap with Sybil signals
- `wax-temporal-behavior-heatmap` — Add time-based community activity
- `wax-defi-loyalty-health-scorecard` — Cross-reference with loyalty metrics
- Future airdrop targeting and partnership tools

It establishes a reusable community analytics pattern.

---

## Implementation Highlights

Full production code committed with:
- D3 force-directed network graph
- Jaccard similarity calculation in Web Worker
- Interactive node/edge exploration
- Clear educational explanations
- Demo mode with pre-loaded collections

---

## How to Run
```bash
git clone https://github.com/pixel-journey/wax-collection-holder-overlap-cluster.git
npm install
npm run dev
```

Explore overlapping holder communities across WAX collections.

---

## PX Perfection Alignment

This implementation targets:
- Educational Depth: Strong explanations + learning outcomes
- Documentation Layers: Excellent README + spec.yaml + ecosystem links
- Machine Readiness: Detailed spec.yaml with AI instructions
- Visual Design: Interactive D3 graph with retro pixel polish
- Ecosystem Synergy: Explicit companion relationships documented

Future iterations will add multi-collection mode, better performance, and deeper integration examples.

*Pixel Journey — Raising the bar for community analytics tooling.*

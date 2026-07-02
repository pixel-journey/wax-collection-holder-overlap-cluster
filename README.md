# wax-collection-holder-overlap-cluster

**Collection Holder Overlap Cluster**

An interactive force-directed network graph visualizer that reveals audience congruence between WAX NFT collections using Jaccard similarity on holder sets. Discover shared collectors, cross-pollination opportunities, and ecosystem relationships.

**Status:** 🔒 Private (In Development) | Target: Public when v1 complete  
**Category:** Community Clustering & Asset Overlap  
**Parent Catalog:** [pixel-journey/wax-ecosystem-blueprint-catalog](https://github.com/pixel-journey/wax-ecosystem-blueprint-catalog)

> Built to the same high standard of educational excellence, production readiness, and WAX best practices as the [gkniftyheads-tracker](https://github.com/henrikpiga/gkniftyheads-tracker).

---

## Quick Start

```bash
git clone https://github.com/pixel-journey/wax-collection-holder-overlap-cluster.git
cd wax-collection-holder-overlap-cluster
npm install
npm run dev
```

The demo loads instantly with sample collections. Enter two collection names to see the interactive network graph and Jaccard similarity score.

---

## Why This Blueprint?

Project teams and marketers on WAX often guess which other collections share their audience. This tool provides clear, visual proof of overlapping holder bases using public on-chain data.

Perfect for partnership planning, airdrop targeting, and understanding true ecosystem cross-pollination.

---

## Architecture & Data Flow

```
User Selects Collections
       ↓
Parallel Holder Fetching (AtomicAssets API v2)
       ↓
Jaccard Similarity Calculation (Web Worker)
  |A ∩ B| / |A ∪ B|
       ↓
D3 Force-Directed Graph Rendering
  - Node size = holder count
  - Edge weight = overlap density
  - Interactive clustering & filtering
```

Heavy computation runs off the main thread for smooth UI.

---

## Complete Repository Structure

Follows Pixel Journey high standards.

Key parts:
- `app/` — Main graph interface
- `components/` — NetworkGraph (D3), CollectionSelector, SimilarityScore, OverlapTable
- `hooks/` — useHolderOverlap, useJaccardCalculation
- `lib/wax/` — atomic-holder-fetcher.ts, jaccard-worker.ts, graph-utils.ts
- `public/mock-data/` — Sample multi-collection holder datasets
- `.github/workflows/` — CI automation

Strong educational comments on graph algorithms and WAX data fetching.

---

## Key WAX Concepts Explained

- **AtomicAssets Account Queries**: Efficiently fetching all holders of a collection via public API.
- **Jaccard Similarity**: Mathematical way to measure set overlap (perfect for audience analysis).
- **Web Workers**: Running heavy set intersection calculations without freezing the UI.
- **D3 Force Simulation**: Creating beautiful, interactive network visualizations.

This is **WAX-primary** (using AtomicAssets holder data). The graph visualization pattern works on any chain with similar account/asset data.

---

## Design Specifications

- Clean, modern network visualization with subtle pixel accents
- Interactive node dragging, zooming, and filtering
- Clear tooltips showing exact overlap numbers
- Responsive layout (graph adapts to screen size)
- Accessible controls and color-blind friendly palette

Aligned with Pixel Journey Design System.

---

## Technical Architecture & Best Practices

- **Stack**: Next.js 15, TypeScript, Tailwind + shadcn/ui, D3.js, @tanstack/react-query
- **Data Fetching**: AtomicAssets v2 accounts endpoint with pagination and caching
- **Performance**: Web Worker for Jaccard math; React Query for efficient data loading
- **Demo Mode**: Full interactive graph with pre-loaded sample collections
- **Live Mode**: Connect wallet (optional) for personalized overlap insights

See catalog standards for WAX rate limiting and public endpoint recommendations.

---

## Demo & Usage

- Explore pre-loaded collection pairs
- Search and add your own collections
- Interact with the force-directed graph
- View detailed overlap tables and statistics
- Export graph data or images

Designed for instant insight and easy extension.

---

## Customization

- Adjust similarity thresholds and graph physics
- Add support for more than two collections
- Integrate with other clustering or loyalty tools
- Customize node/edge styling per project branding

---

## Roadmap

- v1: Core two-collection Jaccard graph + interactive demo
- v1.1: Multi-collection mode and export features
- Future: Deeper integration with affinity bubble maps and cross-game tools

---

## Contributing & Credits

Built with care for better ecosystem understanding on WAX.

MIT License.

Following the production-quality educational standards from the gkniftyheads-tracker.

---

*Pixel Journey — Making Web3 interfaces pixel-perfect and delightful.*
'use client';

import React, { useState } from 'react';

export default function HolderOverlapCluster() {
  const [collections, setCollections] = useState(['PixelJourney', 'WaxRocks', 'CryptoMonkeys']);
  const [overlapData, setOverlapData] = useState<any>(null);

  const analyzeOverlap = () => {
    // Mock Jaccard similarity for demo
    const mockEdges = collections.slice(0, -1).map((col, i) => ({
      source: col,
      target: collections[i + 1],
      similarity: Math.floor(Math.random() * 40) + 25,
    }));

    setOverlapData({
      nodes: collections.map(name => ({ id: name, holders: Math.floor(Math.random() * 8000) + 2000 })),
      edges: mockEdges,
    });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-6">
      <div className="max-w-5xl mx-auto">
        <div className="font-press-start text-2xl tracking-widest text-emerald-400 mb-2">COLLECTION HOLDER OVERLAP CLUSTER</div>
        <div className="text-xs opacity-60 mb-8">Pixel Journey • Audience Congruence • Jaccard Network Graph</div>

        <div className="glassmorphic-crt pixel-border p-6 rounded-2xl mb-6">
          <div className="flex gap-3 mb-4">
            <input
              value={collections.join(', ')}
              onChange={e => setCollections(e.target.value.split(',').map(s => s.trim()))}
              className="flex-1 bg-black/60 border border-white/10 px-4 py-3 rounded-xl font-mono text-sm"
            />
            <button onClick={analyzeOverlap} className="px-8 py-3 bg-emerald-600 rounded-2xl">Analyze Overlap</button>
          </div>

          {overlapData && (
            <div>
              <div className="text-sm mb-3 opacity-70">Force-Directed Overlap Network (Demo)</div>
              <div className="bg-black/60 p-8 rounded-xl min-h-[320px] flex items-center justify-center">
                <div className="text-center">
                  <div className="text-emerald-400 mb-2">Interactive D3 Graph Would Render Here</div>
                  <div className="text-xs opacity-60">Nodes sized by holder count • Edges weighted by Jaccard similarity</div>
                  <div className="mt-4 text-xs">
                    {overlapData.edges.map((e: any, i: number) => (
                      <div key={i}>{e.source} ↔ {e.target} — {e.similarity}% overlap</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="text-xs opacity-70">
          In production, this fetches real holder sets from AtomicAssets and renders a live D3 force-directed graph with Web Worker Jaccard calculation.
        </div>
      </div>
    </div>
  );
}

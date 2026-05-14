# Retrieval Entities vs Plain Content

> ⚠️ Work in Progress  
> These notes document the transition from treating retrieved content as plain text toward modeling it as a structured retrieval entity.

## Context

The initial MVP modeled retrieved content as a primitive string value:

```ts
content: string
```

This approach was sufficient while the system only needed to:
- render markdown
- display canonical content
- validate deterministic retrieval

At this stage, the frontend treated retrieved content purely as presentation material.

---

## Problem

AI-oriented retrieval systems rarely operate on raw text alone.

Real retrieval systems often require additional information associated with retrieved content, including:

- chunk boundaries
- token counts
- retrieval metadata
- semantic segmentation
- source attribution
- retrieval strategy information

A primitive string cannot evolve cleanly to support these concerns.

Treating retrieval output as plain text tightly couples:
- retrieval
- rendering
- representation

This limits future architectural evolution.

---

## Architectural Decision

The content model evolved from:

```ts
content: string
```

toward:

```ts
content: {
  raw: string
}
```

A dedicated retrieval entity was introduced:

```ts
interface RetrievalContent {
  raw: string
}
```

This establishes an explicit retrieval representation layer.

---

## Why This Matters

Although the current structure only wraps raw content, the architectural meaning changes significantly.

The system no longer treats content as:
- simple display text

Instead, content becomes:
- a retrieval artifact
- a structured retrieval object
- a future extensibility boundary

This distinction becomes increasingly important in AI-oriented systems.

---

## Architectural Impact

This change introduces:

- explicit retrieval representation
- separation between content and retrieval metadata
- extensibility without redesign
- stronger domain modeling

The retrieval layer can now evolve incrementally without breaking consumer interfaces.

---

## Future Evolution Path

The retrieval entity may later evolve toward structures such as:

```ts
content: {
  raw: string,
  chunks: Chunk[],
  tokenCount: number,
  retrievalStrategy: string
}
```

Possible future additions include:

- chunk metadata
- embedding references
- semantic boundaries
- token analysis
- retrieval scoring
- source traceability

The architecture now supports these evolutions without requiring major redesign.

---

## Relation to AI Systems

AI systems increasingly operate on:
- retrieval units
- semantic fragments
- token windows
- contextual slices

As a result, retrieval output must often carry additional structural information beyond raw text.

This evolution reflects a broader shift from:
- document-oriented thinking

toward:

- retrieval-oriented representation

---

## Conceptual Evolution

The architecture evolved from:

- content as plain text

toward:

- content as structured retrieval entity

This represents an early movement toward:
- retrieval-aware system modeling
- AI-oriented content architecture
- token-aware retrieval evolution

---

## Why This Matters for Retrieval Experiments

The token-aware retrieval experiment requires the system to eventually reason about:

- chunk structure
- token boundaries
- retrieval segmentation
- contextual reconstruction

A structured retrieval entity provides the foundational abstraction necessary for those future experiments.

Without this abstraction, future evolution would require significant architectural redesign.

---

## Future Directions

Future iterations may evolve toward:

- chunk-based retrieval
- token-aware retrieval analysis
- semantic chunking
- retrieval ranking
- embedding-aware retrieval
- vector-search integration
- context-window experimentation

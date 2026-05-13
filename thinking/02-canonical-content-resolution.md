# Canonical Content Resolution

> These notes document the transition from conditional content selection toward canonical content resolution.

## Context

The initial MVP resolved content through conditional logic directly inside the architecture loading process.

The implementation relied on sequential checks such as:

```ts
if (mapping.content_path.includes('trade-ins')) {
  content = tradeInsContent
}
```

This approach worked for a small number of scenarios, but introduced architectural limitations as the system evolved.

---

## Problem

Conditional content resolution tightly couples:
- retrieval logic
- content identification
- rendering preparation

As the number of content sources increases, this pattern becomes:
- repetitive
- difficult to maintain
- difficult to scale
- prone to duplication

More importantly, it introduces ambiguity into retrieval systems.

AI-oriented systems require deterministic and canonical access to information.

---

## Canonical Resolution Strategy

The architecture evolved toward a lookup-based resolution model.

A centralized lookup object was introduced:

```ts
const contentLookup: Record<string, string> = {
  'content/plans/consumer/phones/trade-ins.md': tradeInsContent,
  'content/plans/consumer/phones/plan-changes.md': planChangesContent
}
```

The system now resolves content through direct key-based lookup:

```ts
const content = contentLookup[mapping.content_path] || ''
```

---

## Architectural Impact

This introduces several important architectural improvements.

### Deterministic Resolution

Each content path resolves to a single canonical content source.

This reduces ambiguity and establishes predictable retrieval behavior.

---

### Separation of Concerns

The loader no longer needs to understand:
- retrieval conditions
- scenario-specific logic
- content-specific branching

Instead, the loader delegates resolution responsibility to the lookup structure.

---

### Scalability

New content sources can now be added through:
- additional lookup entries
- without modifying retrieval logic itself

This reduces branching complexity as the system grows.

---

### Reduced Duplication Risk

Canonical lookup structures discourage duplicate content definitions across multiple retrieval paths.

This is particularly important for AI-integrated systems because duplicated semantic content may:
- dilute retrieval quality
- introduce conflicting retrieval candidates
- reduce embedding consistency

---

## Relation to AI Systems

Traditional interfaces optimize primarily for human navigation.

AI-oriented systems instead require:
- deterministic retrieval
- canonical source definition
- stable semantic references

Canonical content resolution therefore becomes increasingly important as systems evolve toward:
- retrieval pipelines
- embedding systems
- vector search
- RAG architectures

---

## Conceptual Evolution

The architecture evolved from:

- condition-based content selection

toward:

- canonical retrieval-oriented content resolution

This represents an early shift from:
- UI-oriented thinking

toward:

- retrieval-oriented system design

---

## Future Evolution

Future iterations may evolve this structure toward:
- dynamic content registries
- embedding-aware lookup systems
- semantic indexing
- retrieval ranking
- metadata-driven resolution
- vector database integration

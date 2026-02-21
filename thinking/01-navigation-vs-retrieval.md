# Navigation vs Retrieval

> ⚠️ Work in Progress  
> These notes represent evolving architectural thinking aligned with implementation work in this repository.

## Core Claim

Human-oriented Information Architecture relies on navigation.

AI-oriented systems rely on retrieval.

## Why This Matters

Navigation assumes:
- Context accumulation
- Multiple entry points
- Tolerance for duplication

Retrieval assumes:
- Fragment isolation
- Ranking over browsing
- Reduced ambiguity

## Architectural Implication

When content is duplicated across navigation paths, humans reconcile context.

LLM systems do not. They retrieve fragments independently of journey.

This creates structural pressure toward canonicalization.

## Implementation Reflection (MVP)

In this repository:

- IA is modeled as structured JSON.
- Canonical nodes define authoritative meaning.
- React consumes architecture as data, not navigation structure.

## Open Questions

- How does canonical modeling scale in multi-domain systems?
- How should retrieval metadata be encoded?
- What governance model prevents canonical drift?
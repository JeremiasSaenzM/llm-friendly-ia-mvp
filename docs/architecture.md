# Architecture Overview

## Purpose
This project explores how to design an **LLM-friendly information architecture (IA)** for customer support content.

The goal is to demonstrate how content can be:
- Structured deterministically
- Owned canonically
- Retrieved reliably by AI systems
- Extended without increasing complexity

The project intentionally focuses on **architecture and design**, not full system implementation.

---

## Problem Statement
Traditional customer support IA is optimized for **human navigation and live-agent conversations**.

As a result:
- The same concept (e.g. Trade-ins) appears in multiple places
- Duplication is acceptable and often intentional
- Content ownership is implicit rather than explicit

While this works for humans, it introduces challenges for LLM-based systems:
- Conflicting responses
- Ambiguous retrieval
- Inconsistent grounding

This project addresses that gap by designing an IA optimized for **LLM consumption**, while mirroring familiar enterprise structures where possible.

---

## IA Model
The information architecture follows a consistent hierarchical model:

**Category → Topic → Subtopic → Subsection → Level 4 (Scenarios / Use Cases)**

Key principles:
- Levels 0–3 provide structural context
- Level 4 represents **canonical retrieval intent**
- Each Level 4 node owns a single concept

The model is defined explicitly using JSON to ensure it is machine-readable and system-agnostic.

---

## Canonical Content Strategy
Each Level 4 node maps to **one and only one** canonical content source.

For example:
- Trade-ins are modeled as a single canonical scenario
- Other topics may reference Trade-ins, but do not duplicate its content

This approach:
- Eliminates duplication
- Improves LLM response consistency
- Enables deterministic retrieval

Content is authored in **Markdown** to optimize:
- Semantic clarity
- LLM parsing
- Version control
- Downstream transformation

---

## IA to Content Mapping
An explicit mapping file binds IA nodes to their canonical content:

- IA structure is defined independently
- Content lives in predictable paths
- A mapping layer connects the two

This separation mirrors real-world systems such as:
- Search indexes
- AI ingestion pipelines
- CMS synchronization jobs

The mapping enables systems to retrieve content without relying on convention or heuristics.

---

## Label Ownership and Presentation Responsibility

Human-readable labels used by frontend consumers are defined explicitly in the IA-to-content mapping layer rather than being derived or inferred at the UI level.

### Rationale

- IA node identifiers (e.g. `plans.consumer.phones.trade-ins`) are intentionally technical and optimized for consistency, traceability, and machine consumption.
- Human-readable labels represent semantic intent and should therefore be authored intentionally, not generated heuristically.
- Deriving labels in the frontend (e.g. parsing path segments) introduces hidden semantics, increases coupling, and risks inconsistency as the IA evolves.

### Implementation

- Each IA-to-content mapping includes an explicit `label` field.
- Frontend consumers render labels exactly as provided by the mapping layer.
- The frontend does not manipulate, shorten, or reinterpret IA identifiers for presentation purposes.

---

## Scalability Validation
The model was validated by adding additional Level 4 scenarios without:
- Changing the IA structure
- Introducing special cases
- Modifying retrieval rules

This demonstrates that the architecture scales through **extension**, not redesign.

---

## Intentional Scope Limits
This project intentionally does **not** include:
- A frontend application
- LLM prompting or few-shot examples
- AI model integration

These are considered **implementation layers** that build on top of the architecture, not prerequisites for validating it.

---

## Outcome
This project demonstrates that:
- LLM-friendly IA can coexist with enterprise content structures
- Canonical ownership improves AI reliability
- Clean separation of concerns simplifies scaling
- Architecture-first design reduces downstream complexity

## Frontend Validation Milestone

A minimal React + TypeScript frontend was implemented to validate that the defined Information Architecture (IA) and canonical content can be consumed by a client application without redefining structure.

### What was validated

- IA models are consumable as static data artifacts
- IA → content mappings resolve deterministically
- Canonical content authored in Markdown can be ingested as raw text
- The frontend renders content based solely on architecture-driven selection
- No IA rules, structure, or content ownership are reimplemented in the UI

### Current behavior

At this stage, the frontend renders a single scenario by explicitly selecting the first resolved IA scenario from the data pipeline. This is an intentional limitation used to validate end-to-end data flow before introducing UI-driven selection or navigation.

### Why this matters

This milestone demonstrates that the IA and content design are:
- Self-sufficient
- Machine-consumable
- Suitable for downstream systems such as UIs or LLM ingestion pipelines

UI complexity (selectors, trees, navigation) is intentionally deferred to avoid obscuring architectural validation with presentation concerns.

The frontend visualizes full IA paths (breadcrumbs) derived from canonical IA node identifiers to demonstrate complete architecture ingestion rather than selective data consumption.

---

## Iteration 2 – Introducing Strong Typing and Domain Contracts

### Context

Initially, the IA model and scenario mappings were consumed directly from JSON and transformed into renderable structures. While functional, this approach lacked explicit domain contracts, leaving structural guarantees implicit.

### Decision

We introduced TypeScript interfaces to formally model:

- The IA hierarchy (Topic → Subtopic → Subsection → Level4)
- Scenario resolution objects
- The overall ArchitectureModel returned by `loadArchitecture`

The `loadArchitecture` function now explicitly returns a typed `ArchitectureModel`, enforcing structural integrity at compile time.

### Why This Matters

This change transforms the IA from loosely structured JSON into a strongly typed domain model. It ensures:

- Structural consistency
- Early detection of breaking changes
- Clear separation between storage format and domain representation
- A contract-driven architecture suitable for scaling and API evolution

### Transitional Limitation

Content resolution currently relies on conditional string matching against `content_path`. While sufficient for the MVP stage, this approach does not scale cleanly as scenario count increases.

### Next Step

Refactor content resolution into a data-driven lookup model to eliminate branching logic and align with scalable, declarative content resolution patterns.

# LLM-Friendly Information Architecture MVP

This repository contains a minimal working prototype demonstrating how Information Architecture can be modeled as machine-consumable structured data and rendered directly by a frontend application.

This branch (`mvp-baseline`) represents the frozen reference implementation discussed in the accompanying article:

[INSERT LINK TO ARTICLE]

---

## Context

This project explores how Information Architecture traditionally designed for human navigation can be represented and consumed by software systems — including AI-driven retrieval workflows.

Rather than remaining conceptual, the MVP demonstrates these ideas through executable implementation and visualization.

It prioritizes architectural clarity over feature completeness.

---

## What This MVP Demonstrates

- Structured IA modeling as hierarchical data
- Canonical ownership encoding
- Type-enforced architecture contracts
- Separation of structure from presentation
- Frontend-driven consumption of IA data
- Breadcrumb visualization of hierarchy traversal

---

## Architecture Overview

The system is composed of:

- JSON-based architecture definitions
- Markdown content nodes
- TypeScript traversal layer
- React frontend rendering layer

The frontend interprets structure rather than defining it, ensuring architecture remains the source of truth.

(Insert architecture diagram here if desired)

---

## Technology Stack

### Frontend
- React
- TypeScript
- Vite

### Modeling
- JSON-based IA structures
- Markdown content nodes

### Tooling
- Node
- Git
- VS Code

---

## Running the MVP

```
npm install
npm run dev
```

---

## Scope Discipline

This implementation is intentionally minimal.

It excludes:

- Persistence layers
- Indexing pipelines
- Retrieval engines
- Vector search integrations
- Deployment automation

These omissions are deliberate.  
The objective is architectural signal clarity rather than system completeness.

---

## Role of This Repository

This repository is not intended as a production system.

It exists as:

- an architectural exploration
- an executable reference artifact
- a platform for iterative learning and extension

Its value lies in demonstrating structural principles through implementation.

---

## Future Directions

Potential areas of exploration:

- Retrieval simulation layer
- Vector indexing experimentation
- Multi-consumer architecture modeling
- Expanded IA domains

---

## License

Add license details here if publishing publicly.

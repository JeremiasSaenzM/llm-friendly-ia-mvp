# MVP Baseline – LLM-Friendly Information Architecture

## Purpose of this Branch

This branch represents the **Minimum Viable Product (MVP) baseline** for the project.

Its goal is to demonstrate — with the smallest possible surface area — that an Information Architecture (IA) can be:

- Explicitly modeled as structured data
- Consumed by a frontend without reinterpretation
- Designed to support both human understanding and AI / LLM-based retrieval

This branch is intentionally **minimal and frozen**.

It exists as a reference point, not as a feature-complete solution.

---

## What This MVP Includes

This baseline intentionally includes only what is strictly necessary to prove viability:

- A typed IA domain model (TypeScript)
- A minimal React frontend that consumes the IA as modeled
- Direct traversal of the IA structure (no shortcuts, no hardcoding)
- Clear separation between:
  - IA definition
  - UI rendering
  - Interaction logic

No abstractions are introduced unless they are required to support the core idea.

---

## What This MVP Intentionally Excludes

The following are **explicitly out of scope** for this branch:

- Multiple IA roots or large-scale hierarchies
- Advanced React patterns (composition, memoization, optimization)
- Async data loading or API integration
- State management beyond what is strictly required
- Styling, UX polish, or production concerns
- Performance tuning
- Testing infrastructure

These exclusions are intentional and reflect architectural restraint.

---

## Why Minimalism Matters Here

This branch is designed to answer a single question:

> *Can an explicitly modeled Information Architecture be consumed by a frontend in a way that preserves its intended meaning and structure?*

By keeping the solution minimal:
- The signal is not obscured by implementation detail
- Architectural intent remains clear
- Future evolution can be reasoned about deliberately

This branch proves **that the problem is solvable** — nothing more.

---

## Where Development Continues

All further development, experimentation, and learning happens on the `main` branch.

The `main` branch:
- Builds on top of this baseline
- Introduces complexity only when justified
- Documents why and when new patterns are adopted

If you want to understand how the project evolves beyond the MVP, switch to `main`.

---

## How to Use This Branch

- Treat this branch as a snapshot
- Do not add features here
- Use it as a comparison point when evaluating later changes

This branch represents a moment of architectural clarity.

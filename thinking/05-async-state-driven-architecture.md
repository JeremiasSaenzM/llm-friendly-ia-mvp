# Async State-Driven Architecture

> These notes document the transition from synchronous architecture loading toward asynchronous state-driven rendering.

## Context

The initial MVP loaded architecture synchronously:

```ts
const data = loadArchitecture()

## Problem

Modern systems retrieve information asynchronously.

Examples include:

- APIs
- vector databases
- retrieval pipelines
- external content services
- embedding systems

In these environments:

- data may not exist yet
- retrieval may fail
- state changes over time

The UI must therefore model asynchronous state transitions explicitly.

---

## Architectural Decision

The architecture loading process was refactored into an asynchronous workflow.

### Async Loader

`loadArchitecture()` now returns:

```ts
Promise<ArchitectureModel>

instead of a direct synchronous object.

The loader simulates latency through delayed resolution in order to mimic real retrieval behavior.

---

## Stateful Retrieval Hook

`useArchitecture()` evolved from a simple wrapper into a state orchestration layer.

The hook now manages:

- architecture state
- loading state
- error state

This introduces lifecycle-aware rendering behavior into the application.

The hook became responsible for:

- asynchronous retrieval
- state transitions
- controlled re-rendering
- retrieval failure handling

---

## Lifecycle-Aware Rendering

`App.tsx` was updated to render conditionally based on retrieval state.

The UI now explicitly handles:

- loading
- retrieval failure
- unavailable architecture state
- successful retrieval

This prevents rendering assumptions that would otherwise cause runtime failures.

---

## React Concepts Reinforced

### Hooks Must Maintain Stable Execution Order

React internally tracks hooks by execution order rather than by name.

Hooks cannot be conditionally skipped because React depends on consistent positional execution between renders.

---

### State Drives Rendering

React re-renders components based on state transitions rather than variable mutation.

The application evolved from:

- function-oriented synchronous retrieval

toward:

- state-driven asynchronous rendering

---

### Side Effects Belong in `useEffect`

Asynchronous retrieval was isolated into `useEffect` because data fetching is a side effect rather than part of rendering itself.

This preserves rendering purity while allowing controlled asynchronous behavior.

---

## Architectural Impact

The system now models:

- asynchronous retrieval behavior
- lifecycle-driven rendering
- null-safe rendering boundaries
- separation of retrieval from presentation
- delayed data availability

This moves the MVP closer to the behavior expected in:

- AI-integrated systems
- retrieval pipelines
- distributed architectures
- RAG-style applications

---

## Future Evolution

This architectural direction prepares the system for:

- real API retrieval
- embedding pipelines
- vector search
- retrieval ranking
- caching
- prompt orchestration
- token-aware retrieval systems
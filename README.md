# LLM-Friendly IA MVP

This repository contains a small, documented MVP exploring how
Information Architecture can be structured to better support
LLM ingestion while remaining understandable to humans.

## Purpose
- Practice frontend-adjacent engineering skills
- Explore IA patterns optimized for AI agents
- Document decisions and tradeoffs clearly

## Scope (MVP)
- No production data
- No live backend
- Static or mock content only
- Focus on structure, not scale

## Documentation
This repo intentionally documents:
- Setup decisions
- IA modeling assumptions
- Tradeoffs between human vs LLM-oriented structure

## How to Read This Repository

This repository is organized to separate **structure**, **content**, and **system bindings**:

- `ia/`  
  Defines the information architecture model and rules in a machine-readable format.

- `content/`  
  Contains canonical, LLM-ready content authored in Markdown.  
  Each file maps to a single Level 4 IA scenario.

- `docs/`  
  Provides architectural context and design rationale.

The project is intended to be read from an architecture-first perspective, not as a complete application.

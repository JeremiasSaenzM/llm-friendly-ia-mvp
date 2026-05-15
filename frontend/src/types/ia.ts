export interface LLMNotes {
  retrieval_intent: string
  anti_duplication_rule: string
  human_vs_llm: string
}

export interface Level4 {
  id: string
  label: string
  description: string
  llm_notes: LLMNotes
}

export interface Subsection {
  id: string
  label: string
  description: string
  levels: Level4[]
}

export interface Subtopic {
  id: string
  label: string
  description: string
  subsections: Subsection[]
}

export interface Topic {
  id: string
  label: string
  description: string
  subtopics: Subtopic[]
}

export interface Scenario {
  iaNodeId: string
  label: string
  contentPath: string
  content: RetrievalContent
}

export interface ArchitectureModel {
  iaModel: Topic
  scenarios: Scenario[]
}

export interface RetrievalChunk {
  id: string
  text: string
  tokenCount: number
}

export interface RetrievalContent {
  raw: string
  chunks: RetrievalChunk[]
}

import { loadArchitecture } from '../data/loadArchitecture'
import type { ArchitectureModel } from '../types/ia'

/**
 * useArchitecture
 *
 * Encapsulates retrieval of IA model data.
 * This abstraction allows future evolution toward:
 * - async fetching
 * - caching
 * - validation
 * - schema normalization
 */
export function useArchitecture(): ArchitectureModel {
  const data = loadArchitecture()

  return data
}

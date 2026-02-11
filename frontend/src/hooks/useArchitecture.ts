import { loadArchitecture } from '../data/loadArchitecture'

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
export function useArchitecture() {
  const data = loadArchitecture()

  return data
}

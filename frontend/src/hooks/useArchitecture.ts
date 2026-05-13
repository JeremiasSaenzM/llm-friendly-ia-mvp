import { useEffect, useState } from 'react'
import { loadArchitecture } from '../data/loadArchitecture'
import type { ArchitectureModel } from '../types/ia'

type UseArchitectureResult = {
  architecture: ArchitectureModel | null
  loading: boolean
  error: string | null
}

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
export function useArchitecture(): UseArchitectureResult {
  const [architecture, setArchitecture] =
    useState<ArchitectureModel | null>(null)

  const [loading, setLoading] = useState(true)

  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchArchitecture() {
      try {
        const data = await loadArchitecture()
        setArchitecture(data)
      } catch (err) {
        setError('Failed to load architecture')
      } finally {
        setLoading(false)
      }
    }

    fetchArchitecture()
  }, [])

  return {
    architecture,
    loading,
    error
  }
}
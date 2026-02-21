import iaModel from '../../../ia/ia-model.json'
import contentMap from '../../../ia/ia-content-map.json'
import tradeInsContent from '../../../content/plans/consumer/phones/trade-ins.md?raw'
import planChangesContent from '../../../content/plans/consumer/phones/plan-changes.md?raw'
import type { ArchitectureModel, Scenario } from '../types/ia'

const contentLookup: Record<string, string> = {
  'content/plans/consumer/phones/trade-ins.md': tradeInsContent,
  'content/plans/consumer/phones/plan-changes.md': planChangesContent
}

export function loadArchitecture(): ArchitectureModel {
  const scenarios: Scenario[] = contentMap.mappings.map(mapping => {
    const content = contentLookup[mapping.content_path] || ''

    return {
      iaNodeId: mapping.ia_node_id,
      label: mapping.label,
      contentPath: mapping.content_path,
      content
    }
  })

  return {
    iaModel,
    scenarios
  }
}

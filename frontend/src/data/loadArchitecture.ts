import iaModel from '../../../ia/ia-model.json'
import contentMap from '../../../ia/ia-content-map.json'
import tradeInsContent from '../../../content/plans/consumer/phones/trade-ins.md?raw'
import planChangesContent from '../../../content/plans/consumer/phones/plan-changes.md?raw'

export function loadArchitecture() {
  const scenarios = contentMap.mappings.map(mapping => {
    let content = ''

    if (mapping.content_path.includes('trade-ins')) {
      content = tradeInsContent
    }

    if (mapping.content_path.includes('plan-changes')) {
      content = planChangesContent
    }

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

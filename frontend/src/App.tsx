import { useState } from 'react'
import { useArchitecture } from './hooks/useArchitecture'

function renderBreadcrumbs(iaNodeId: string) {
  const parts = iaNodeId.split('.')

  return parts.map((part, index) => {
    const label = part
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')

    return (
      <span key={index}>
        {label}
        {index < parts.length - 1 && ' → '}
      </span>
    )
  })
}

function App() {
  const data = useArchitecture()
  const [selectedIndex, setSelectedIndex] = useState(0)
  const selectedScenario = data.scenarios[selectedIndex]

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>LLM-Friendly IA MVP</h1>

      <label>
        Select scenario:{' '}
        <select
          value={selectedIndex}
          onChange={(e) => setSelectedIndex(Number(e.target.value))}
        >
          {data.scenarios.map((scenario, index) => (
            <option key={scenario.iaNodeId} value={index}>
              {scenario.label}
            </option>
          ))}
        </select>
      </label>

      <hr />

      <p style={{ color: '#555', marginTop: '1rem' }}>
        <strong>IA Path:</strong>{' '}
        {renderBreadcrumbs(selectedScenario.iaNodeId)}
      </p>

      <h2>{selectedScenario.label}</h2>
      <p>
        <strong>IA Node:</strong> {selectedScenario.iaNodeId}
      </p>
      <p>
        <strong>Content Path:</strong> {selectedScenario.contentPath}
      </p>

      <h3>Content (Markdown)</h3>
      <pre style={{ whiteSpace: 'pre-wrap' }}>
        {selectedScenario.content}
      </pre>
    </div>
  )
}

export default App

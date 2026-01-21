import { useState } from 'react'
import { loadArchitecture } from './data/loadArchitecture'

function App() {
  const data = loadArchitecture()
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

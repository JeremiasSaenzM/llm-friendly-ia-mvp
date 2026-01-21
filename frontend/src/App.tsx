import { loadArchitecture } from './data/loadArchitecture'

function App() {
  const data = loadArchitecture()
  const firstScenario = data.scenarios[0]

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>LLM-Friendly IA MVP</h1>

      <h2>Scenario</h2>
      <p>
        <strong>IA Node:</strong> {firstScenario.iaNodeId}
      </p>
      <p>
        <strong>Content Path:</strong> {firstScenario.contentPath}
      </p>

      <h3>Content (Markdown)</h3>
      <pre style={{ whiteSpace: 'pre-wrap' }}>
        {firstScenario.content}
      </pre>
    </div>
  )
}

export default App

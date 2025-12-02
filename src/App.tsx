import React, { useState } from 'react'
import InputBox from './components/InputBox'
import JSONViewer from './components/JSONViewer'
import ActionResult from './components/ActionResult'


export type Structured = any
export type ExecResult = any


export default function App() {
const [jsonOut, setJsonOut] = useState<Structured | null>(null)
const [result, setResult] = useState<ExecResult | null>(null)
const [loading, setLoading] = useState(false)


return (
<div className="app">
<h1>Actionable Data Engine — Demo (TypeScript)</h1>
<p>Type a command (e.g. "Remind me to pay rent next Friday and call mom tomorrow at 9am")</p>


<InputBox setJsonOut={setJsonOut} setResult={setResult} setLoading={setLoading} />


{loading && <div className="loader">Processing...</div>}


<div className="panels">
<div className="panel">
<h2>Structured JSON from LLM</h2>
<JSONViewer src={jsonOut} />
</div>


<div className="panel">
<h2>Execution Result</h2>
<ActionResult result={result} />
</div>
</div>
</div>
)
}
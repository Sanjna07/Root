import React, { useState } from 'react'
import axios from 'axios'


interface Props {
setJsonOut: (v: any) => void
setResult: (v: any) => void
setLoading: (v: boolean) => void
}


export default function InputBox({ setJsonOut, setResult, setLoading }: Props) {
const [text, setText] = useState('')


async function handleSubmit(e?: React.FormEvent) {
e?.preventDefault()
if (!text.trim()) return alert('Type a command')
setLoading(true)
setJsonOut(null)
setResult(null)
try {
const res = await axios.post('http://localhost:4000/api/interpret', { message: text })
setJsonOut(res.data.structured)
setResult(res.data.execution)
} catch (err: any) {
console.error(err)
alert('Error: ' + (err.response?.data?.error || err.message))
} finally {
setLoading(false)
}
}


return (
<form onSubmit={handleSubmit} className="input-box">
<textarea
placeholder="Write a command..."
value={text}
onChange={(e) => setText(e.target.value)}
rows={4}
/>
<div>
<button type="submit">Interpret Command</button>
</div>
</form>
)
}
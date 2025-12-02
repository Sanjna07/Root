import React from 'react'


export default function ActionResult({ result }: { result: any }) {
if (!result) return <div className="empty">No execution result yet</div>


return (
<div>
<pre>{JSON.stringify(result, null, 2)}</pre>
</div>
)
}
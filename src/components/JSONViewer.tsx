import ReactJson from '@microlink/react-json-view'

export default function JSONViewer({ src }: { src: any }) {
  if (!src) return <div className="empty">No JSON yet</div>
  return <ReactJson src={src} collapsed={1} name={false} />
}
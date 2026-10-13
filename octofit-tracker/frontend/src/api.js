const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()

export const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000'

function findItems(payload) {
  if (Array.isArray(payload)) return payload
  if (!payload || typeof payload !== 'object') return null

  for (const key of ['results', 'items']) {
    if (Array.isArray(payload[key])) return payload[key]
  }

  if (Array.isArray(payload.data)) return payload.data
  if (payload.data && typeof payload.data === 'object') return findItems(payload.data)
  return null
}

export async function fetchCollection(path, signal) {
  const response = await fetch(`${apiBaseUrl}${path}`, { signal })
  if (!response.ok) {
    throw new Error(`Request failed (${response.status} ${response.statusText})`)
  }

  const payload = await response.json()
  const items = findItems(payload)
  if (!items) {
    throw new Error('The API returned an unsupported collection response')
  }
  return items
}

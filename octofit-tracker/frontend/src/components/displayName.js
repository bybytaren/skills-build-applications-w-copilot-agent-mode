export default function getDisplayName(value) {
  if (value && typeof value === 'object') {
    return value.name || value.username || 'Unknown'
  }
  return value || 'Unknown'
}

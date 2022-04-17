function formatDateTime (timestamp) {
  const data = new Date(timestamp)
  const y = data.getFullYear()
  const m = data.getMonth() + 1
  const d = data.getDate()
  const h = data.getHours()
  const i = data.getMinutes()
  const s = data.getSeconds()
  return `${h}:${i}:${s}`
}

export {
  formatDateTime
}

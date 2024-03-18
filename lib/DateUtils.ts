export function formattedTime(unixTimestamp: number) {
  const milliseconds = unixTimestamp * 1000
  const date = new Date(milliseconds)
  return date.toLocaleTimeString()
}
export function formattedDay(unixTimestamp: number) {
  const milliseconds = unixTimestamp * 1000
  const seconds = milliseconds / 60
  const minutes = seconds / 60
  const hours = minutes / 60
  const date = new Date(hours)
  return date.toLocaleTimeString()
}

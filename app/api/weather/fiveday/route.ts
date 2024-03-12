export async function GET(req: Request) {
  const lat = 33.5132192
  const lon = 36.2768193

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.KEY_API}`
  )

  const data = await res.json()

  return Response.json(data)
}

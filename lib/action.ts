export async function getWeather() {
  const { searchParams } = new URL("http://localhost:3000")
  const lat = searchParams.get("lat") || 12
  const lon = searchParams.get("lon") || 12

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.KEY_API}`,
    {
      next: { revalidate: 900 },
    }
  )

  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  const data = await res.json()
  return Response.json(data)
}

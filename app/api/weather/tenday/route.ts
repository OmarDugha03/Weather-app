export async function GET(request: Request) {
  const lat = 33.5132192
  const lon = 36.2768193
  const NUMBER_OF_DAYS = 10

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=${NUMBER_OF_DAYS}&units=metric&appid=${process.env.KEY_API}`,
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

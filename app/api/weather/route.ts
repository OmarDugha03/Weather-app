export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const lat = searchParams.get("lat")
  const lon = searchParams.get("lon")

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

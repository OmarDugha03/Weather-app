export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const lat = searchParams.get("lat")
  const lon = searchParams.get("lon")
  try {
    const res = await fetch(
      `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${process.env.KEY_API}`,
      { next: { revalidate: 900 } }
    )
    const data = await res.json()

    return Response.json(data)
  } catch (error) {
    console.log(error)
  }
}

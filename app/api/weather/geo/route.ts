export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const cityname = searchParams.get("cityname")
  const res = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${cityname}&appid=${process.env.KEY_API}`,
    {
      next: { revalidate: 900 },
    }
  )
  const data = await res.json()

  return Response.json(data)
}

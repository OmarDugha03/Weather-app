export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const lat = searchParams.get("lat") || 33.5132192
  const lon = searchParams.get("lon") || 36.2768193
  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=uv_index_max,uv_index_clear_sky_max&timezone=auto&forecast_days=1`,
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

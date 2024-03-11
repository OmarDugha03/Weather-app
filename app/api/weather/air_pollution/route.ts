export async function GET(req: Request) {
  const lat = 33.5132192
  const lon = 36.2768193
  try {
    const res = await fetch(
      `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${process.env.KEY_API}`
    )
    const data = await res.json()

    return Response.json(data)
  } catch (error) {
    console.log(error)
  }
}

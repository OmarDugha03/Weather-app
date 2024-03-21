import axios from "axios"

export const fetchForecast = async (lat: string | null, lon: string | null) => {
  try {
    const res = await axios.get(`api/weather?lat=${lat}&lon=${lon}`)
    return res
  } catch (error) {
    console.log("Error fetching forecast data: ", error)
  }
}

"use client"
import { FiveDayForecast } from "@/types/weather"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useSearchParams } from "next/navigation"
import { FC } from "react"

interface HumidityProps {}

const Humidity: FC<HumidityProps> = ({}) => {
  const searchParams = useSearchParams()
  const lat = searchParams.get("lat") || 33.5132192
  const lon = searchParams.get("lon") || 36.2768193
  const { data } = useQuery({
    queryKey: ["fiveday"],
    queryFn: () =>
      axios.get<FiveDayForecast>(`api/weather/fiveday?lat=${lat}&lon=${lon}`),
  })
  return (
    <div>
      {data?.data.list[0].main.humidity}

      <p>
        {
          //@ts-ignore
          data?.data.list[0].main.humidity < 40
            ? "Low humidity. It might feel dry."
            : //@ts-ignore
            data?.data.list[0].main.humidity < 70
            ? "Moderate humidity. Comfortable conditions."
            : "High humidity. It might feel humid and uncomfortable."
        }
      </p>
    </div>
  )
}

export default Humidity

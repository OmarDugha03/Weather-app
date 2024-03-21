"use client"
import { FiveDayForecast } from "@/types/weather"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { FC } from "react"

interface HumidityProps {}

const Humidity: FC<HumidityProps> = ({}) => {
  const { data } = useQuery({
    queryKey: ["fiveday"],
    queryFn: () => axios.get<FiveDayForecast>("api/weather/fiveday"),
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

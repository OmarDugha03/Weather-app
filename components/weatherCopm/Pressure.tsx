"use client"
import { FiveDayForecast } from "@/types/weather"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { FC } from "react"

interface PressureProps {}

const Pressure: FC<PressureProps> = ({}) => {
  const { data } = useQuery({
    queryKey: ["fiveday"],
    queryFn: () => axios.get<FiveDayForecast>("api/weather/fiveday"),
  })
  return (
    <div>
      {data?.data.list[0].main.pressure}hPa{" "}
      <p>
        {data?.data.list[0].main.pressure < 1000
          ? "Low pressure. Expect changes in the weather."
          : data?.data.list[0].main.pressure >= 1000 &&
            data?.data.list[0].main.pressure <= 1010
          ? "Normal pressure. Typical weather conditions."
          : "High pressure. Expect stable and clear weather."}
      </p>
    </div>
  )
}

export default Pressure

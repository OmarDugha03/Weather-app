"use client"
import { FiveDayForecast } from "@/types/weather"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useSearchParams } from "next/navigation"
import { FC } from "react"

interface PressureProps {}

const Pressure: FC<PressureProps> = ({}) => {
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
      {data?.data.list[0].main.pressure}hPa
      <p>
        {
          // @ts-ignore: Object is possibly 'null'.
          data?.data.list[0].main.pressure < 1000
            ? "Low pressure. Expect changes in the weather."
            : // @ts-ignore: Object is possibly 'null'.
            data?.data.list[0].main.pressure >= 1000 &&
              // @ts-ignore: Object is possibly 'null'.
              data?.data.list[0].main.pressure <= 1010
            ? "Normal pressure. Typical weather conditions."
            : "High pressure. Expect stable and clear weather."
        }
      </p>
    </div>
  )
}

export default Pressure

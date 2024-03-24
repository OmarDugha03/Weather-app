"use client"
import { FiveDayForecast } from "@/types/weather"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useSearchParams } from "next/navigation"
import { FC } from "react"
import { SingleSkel } from "../ui/SingleCardSkel"

interface PressureProps {}

const Pressure: FC<PressureProps> = ({}) => {
  const searchParams = useSearchParams()
  const lat = searchParams.get("lat") || 33.5132192
  const lon = searchParams.get("lon") || 36.2768193
  const { data, isPending } = useQuery({
    queryKey: ["fiveday"],
    queryFn: () =>
      axios.get<FiveDayForecast>(`api/weather/fiveday?lat=${lat}&lon=${lon}`),
  })
  return (
    <>
      {isPending ? (
        <SingleSkel />
      ) : (
        <>
          <p className="flex items-center gap-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4">
              <path d="m12 14 4-4" />
              <path d="M3.34 19a10 10 0 1 1 17.32 0" />
            </svg>
            <p>Pressure</p>
          </p>
          <p className="mt-16 mb-4">{data?.data.list[0].main.pressure}hPa</p>{" "}
          <p>
            {
              // @ts-ignore: Object is possibly 'undefined'.
              data?.data.list[0].main.pressure < 1000
                ? "Low pressure. Expect changes in the weather."
                : // @ts-ignore: Object is possibly 'undefined'.
                data?.data.list[0].main.pressure >= 1000 &&
                  // @ts-ignore: Object is possibly 'undefined'.
                  data?.data.list[0].main.pressure <= 1010
                ? "Normal pressure. Typical weather conditions."
                : "High pressure. Expect stable and clear weather."
            }
          </p>
        </>
      )}
    </>
  )
}

export default Pressure

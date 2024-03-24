"use client"
import { FiveDayForecast } from "@/types/weather"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useSearchParams } from "next/navigation"
import { FC } from "react"
import { SingleSkel } from "../ui/SingleCardSkel"

interface FeelslikeProps {}

const Feelslike: FC<FeelslikeProps> = ({}) => {
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
          <span className="flex gap-x-3 items-center mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4">
              <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
            </svg>
            <p>Feels Like</p>
          </span>

          <div className="mt-16 mb-4">
            {data?.data.list[0].main.feels_like} <sup>o</sup>{" "}
          </div>
          <div>
            <p>
              {
                // @ts-ignore: Object is possiundefined'.bly '
                data?.data.list[0].main.feels_like <
                // @ts-ignore: Object is possiundefined'.bly '
                data?.data.list[0].main.temp
                  ? "Feels colder than the actual temperature."
                  : // @ts-ignore: Object is possiundefined'.bly '
                  data?.data.list[0].main.feels_like >
                    // @ts-ignore: Object is possiundefined'.bly '
                    data?.data.list[0].main.temp
                  ? "Feels warmer than the actual temperature."
                  : "Feels like the actual temperature."
              }
            </p>
          </div>
        </>
      )}
    </>
  )
}

export default Feelslike

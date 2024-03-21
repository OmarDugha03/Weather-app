"use client"

import { Precipitation } from "@/types/weather"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useSearchParams } from "next/navigation"
import { SingleSkel } from "../ui/SingleCardSkel"

const Precipitation = ({}) => {
  const searchParams = useSearchParams()
  const lat = searchParams.get("lat") || 33.5132192
  const lon = searchParams.get("lon") || 36.2768193
  const { data, isPending } = useQuery({
    queryKey: ["precipitation"],
    queryFn: () =>
      axios.get<Precipitation>(
        `/api/weather/precipitation?lat=${lat}&lon=${lon}`
      ),
  })
  return (
    <>
      {isPending ? (
        <SingleSkel />
      ) : (
        <>
          <p className="flex items-center gap-x-3">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 invert dark:invert-0">
              <path
                d="M16.6102 19.9999C17.9502 20.0099 19.2402 19.5099 20.2302 18.6099C23.5002 15.7499 21.7502 10.0099 17.4402 9.46995C15.9002 0.129949 2.43022 3.66995 5.62022 12.5599"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.27986 12.9698C6.74986 12.6998 6.15986 12.5598 5.56986 12.5698C0.909864 12.8998 0.919864 19.6798 5.56986 20.0098"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.8198 9.88998C16.3398 9.62998 16.8998 9.48998 17.4798 9.47998"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                opacity="0.4"
                d="M9.97022 20L7.97021 22"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                opacity="0.4"
                d="M13.9702 20L11.9702 22"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                opacity="0.4"
                d="M13.9702 16L11.9702 18"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                opacity="0.4"
                d="M9.97022 16L7.97021 18"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Precipitation</span>
          </p>
          <div>
            {data?.data.list.map((i) => i.rain?.["3h"]) || 0} mm <br />
            in the last 3h
          </div>
          <span>
            <p>
              {data?.data.list.map((i) =>
                i.rain?.["1h"] !== undefined
                  ? i.rain["1h"] <= 0.2
                    ? "Light rain or drizzle. An umbrella may come in handy."
                    : i.rain["1h"] <= 2.5
                    ? "Moderate rain."
                    : "Heavy rain."
                  : "Conditions are dry."
              )}
            </p>
          </span>
        </>
      )}
    </>
  )
}

export default Precipitation

"use client"
import { FiveDayForecast } from "@/types/weather"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useSearchParams } from "next/navigation"
import { FC } from "react"

interface VisibilityProps {}

const Visibility: FC<VisibilityProps> = ({}) => {
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
      {Number(data?.data.list[0].visibility) / 1000} KM
      <p>
        {Number(data?.data.list[0].visibility) / 1000 >= 10
          ? "It's perfectly clear right now."
          : Number(data?.data.list[0].visibility) / 1000 >= 5
          ? "Good visibility."
          : "Poor visibility. Exercise caution while driving or moving around."}
      </p>{" "}
    </div>
  )
}

export default Visibility

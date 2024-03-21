"use client"
import { FiveDayForecast } from "@/types/weather"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { FC } from "react"

interface VisibilityProps {}

const Visibility: FC<VisibilityProps> = ({}) => {
  const { data } = useQuery({
    queryKey: ["fiveday"],
    queryFn: () => axios.get<FiveDayForecast>("api/weather/fiveday"),
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

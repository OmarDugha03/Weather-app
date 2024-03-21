"use client"
import { FiveDayForecast } from "@/types/weather"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { FC } from "react"

interface FeelslikeProps {}

const Feelslike: FC<FeelslikeProps> = ({}) => {
  const { data } = useQuery({
    queryKey: ["fiveday"],
    queryFn: () => axios.get<FiveDayForecast>("api/weather/fiveday"),
  })
  return <div>{data?.data.list[0].main.feels_like}</div>
}

export default Feelslike

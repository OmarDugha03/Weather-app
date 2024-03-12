"use client"
import { LocationData } from "@/types/weather"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { SunDim } from "lucide-react"
import { Progress } from "../ui/progress"

const Ux = ({}) => {
  const { data } = useQuery({
    queryKey: ["ux"],
    queryFn: () => axios.get<LocationData>("api/weather/ux"),
  })
  const uxround: any = data?.data.daily.uv_index_max
  return (
    <section>
      <span className="flex items-center gap-x-3">
        <SunDim size={25} />
        <p>UV Index</p>
      </span>
      <p className="mt-2">{Math.round(uxround)}</p>
      <p className="my-1">
        {
          //@ts-ignore
          data?.data.daily.uv_index_max <= 2
            ? "Low"
            : //@ts-ignore
            data?.data.daily.uv_index_max <= 5
            ? "Moderate"
            : //@ts-ignore
            data?.data.daily.uv_index_max <= 7
            ? "High"
            : "Very High"
        }
      </p>
      <Progress
        className="progress my-2"
        value={(uxround / 14) * 100}
        max={14}
      />
      {/* Take something with you */}
      <p className="mt-4">
        {
          //@ts-ignore
          data?.data.daily.uv_index_max <= 2
            ? "No protection needed."
            : //@ts-ignore
            data?.data.daily.uv_index_max <= 5
            ? "Wear sunscreen."
            : "Take precautions."
        }
      </p>
    </section>
  )
}

export default Ux

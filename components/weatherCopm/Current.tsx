"use client"
import Clock from "react-live-clock"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { Skeleton } from "../ui/skeleton"
import { SkeletonCard } from "../ui/cardSkel"

const Current = ({}) => {
  const searchParams = useSearchParams()
  const lat = searchParams.get("lat") || 33.5132192
  const lon = searchParams.get("lon") || 36.2768193
  const { data, isPending } = useQuery({
    queryKey: ["weather"],
    queryFn: () => axios.get(`/api/weather?lat=${lat}&lon=${lon}`),
  })
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]
  const currentDate = new Date()
  const dayOfWeek = currentDate.getDay()

  return (
    <>
      {isPending ? (
        <SkeletonCard />
      ) : (
        <section className="mt-5 flex flex-col  lg:space-y-10">
          {/* Clock and Week Day */}
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold">{weekdays[dayOfWeek]}</h3>
            <div>
              <Clock
                format={"HH:mm"}
                ticking={true}
                timezone={data?.data.timezone.toString()}
              />
              <span className="ms-[2px]">
                {" "}
                {currentDate.getDate() > 12 ? "AM" : "PM"}
              </span>
            </div>
          </div>
          {/* City Name */}
          <span>{data?.data.name}</span>
          {/* Weather Status */}
          <span className="text-center text-3xl lg:text-7xl font-bold">
            {Math.round(data?.data.main.temp)} <sup>o</sup>
          </span>

          <div className="">
            <Image
              alt="icon"
              src={`/icon/${data?.data.weather[0].icon}.png`}
              width={24}
              height={24}
            />
            <div>{data?.data.weather[0].main}</div>
            <div className="flex gap-1 dark:text-neutral-500">
              <span>H: {Math.round(data?.data.main.temp_max)}&deg;</span>
              <span>L: {Math.round(data?.data.main.temp_min)}&deg;</span>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default Current

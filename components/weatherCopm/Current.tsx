"use client"
import Clock from "react-live-clock"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

import Image from "next/image"

const Current = ({}) => {
  const { data } = useQuery({
    queryKey: ["weather"],
    queryFn: () => axios.get("/api/weather"),
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
    <section className="flex flex-col  space-y-10">
      {/* Clock and Week Day */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold">{weekdays[dayOfWeek]}</h3>
        <div>
          <Clock
            format={"HH:mm:ss"}
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
      <span className="text-3xl lg:text-4xl">City</span>
      {/* Weather Status */}
      <span className="text-center text-3xl lg:text-7xl font-bold">
        {Math.round(data?.data.main.temp)} <sup>o</sup>
      </span>

      <div className="space-y-1">
        <Image
          alt="icon"
          src={`/icon/${data?.data.weather[0].icon}.png`}
          width={24}
          height={24}
        />
        <div>{data?.data.weather[0].main}</div>
        <div className="flex gap-2 dark:text-neutral-500">
          <span>H: {Math.round(data?.data.main.temp_max)}&deg;</span>
          <span>L: {Math.round(data?.data.main.temp_min)}&deg;</span>
        </div>
      </div>
    </section>
  )
}

export default Current

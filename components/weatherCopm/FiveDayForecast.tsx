"use client"
import { FiveDayForecast } from "@/types/weather"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import Image from "next/image"
import { FC, useState } from "react"
import { v4 as uuidv4 } from "uuid"
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel"
import { formattedDay } from "@/lib/DateUtils"
import { kelTOCel } from "@/lib/kelTOCel"
import { useSearchParams } from "next/navigation"

interface FiveDayForecastProps {}

const FiveDayForecast: FC<FiveDayForecastProps> = ({}) => {
  const [five, setFive] = useState<FiveDayForecast[]>()
  const searchParams = useSearchParams()
  const lat = searchParams.get("lat") || 33.5132192
  const lon = searchParams.get("lon") || 36.2768193
  const { data } = useQuery({
    queryKey: ["fiveday"],
    queryFn: () =>
      axios.get<FiveDayForecast>(`api/weather/fiveday?lat=${lat}&lon=${lon}`),
  })

  for (let i = 0; i < 40; i += 8) {
    data?.data.list.map((item) => {
      console.log(item.dt_txt.slice(i, i + 5))
    })
  }
  return (
    <>
      <p className="flex items-start gap-2  text-center w-full mt-4">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 invert dark:invert-0">
          <path
            d="M8 2V5"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 2V5"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.5 9.08984H20.5"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.6947 13.7002H15.7037"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.6947 16.7002H15.7037"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.9955 13.7002H12.0045"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.9955 16.7002H12.0045"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.29431 13.7002H8.30329"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.29431 16.7002H8.30329"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-[13px] text-left ms-2">
          5-Day Forecast for {data?.data.city.name}
        </span>
      </p>
      <div className="h-[570px]  overflow-y-hidden overscroll-y-auto">
        <div>
          <Carousel orientation="vertical">
            <CarouselContent className="mt-10 flex flex- lg:mt-14">
              {data?.data.list.map((i) => (
                <CarouselItem
                  className="lg:basis-[100px]   basis-[140px]"
                  key={uuidv4()}>
                  {i.dt_txt}
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </>
  )
}

export default FiveDayForecast

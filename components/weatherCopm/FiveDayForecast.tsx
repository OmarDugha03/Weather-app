"use client"
import { FiveDayForecast } from "@/types/weather"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import Image from "next/image"
import { FC } from "react"
import { v4 as uuidv4 } from "uuid"
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel"
import { formattedDay } from "@/lib/DateUtils"
import { kelTOCel } from "@/lib/kelTOCel"

interface FiveDayForecastProps {}

const FiveDayForecast: FC<FiveDayForecastProps> = ({}) => {
  const { data } = useQuery({
    queryKey: ["fiveday"],
    queryFn: () => axios.get<FiveDayForecast>("api/weather/fiveday"),
  })

  return (
    <>
      <p className="flex items-center  text-center w-full mt-4">
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
        <span className="text-[13px] ms-2">
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
                  <div key={i.dt} className="flex ">
                    <div>{i.main.temp}</div>
                    <Image
                      src={`/icon/${i.weather[0].icon}.png`}
                      alt={i.weather[0].description}
                      width={44}
                      height={44}
                    />
                    <div className="flex-1 flex items-center justify-between gap-4">
                      <p className="font-bold">{i.main.temp_min}°C</p>
                      <div className="temperature flex-1 w-full h-2 rounded-lg"></div>
                      <p className="font-bold">{i.main.temp_max}°C</p>
                    </div>
                  </div>
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

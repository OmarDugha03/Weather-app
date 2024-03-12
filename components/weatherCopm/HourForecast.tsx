"use client"
import { v4 as uuidv4 } from "uuid"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { FiveDayForecast } from "@/types/weather"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import moment from "moment"
import { kelTOCel } from "@/lib/kelTOCel"

const HourForecast = ({}) => {
  const { data } = useQuery({
    queryKey: ["hours"],
    queryFn: () => axios.get<FiveDayForecast>("api/weather/fiveday"),
  })
  const today = new Date()
  const stringForToDay = today.toISOString().split("T")[0]
  return (
    <Carousel className="w-full cursor-grabbing ">
      <CarouselContent className="mt-10 lg:mt-14">
        {data?.data.list.map((i) => (
          <CarouselItem
            className="lg:basis-[100px]  basis-[140px]"
            key={uuidv4()}>
            {i.weather.slice(0, 12).map((sec) => (
              <>
                <div
                  className="flex z-20 items-center relative text-center justify-center flex-col"
                  key={uuidv4()}>
                  <span className="absolute -top-[32px] text-sm">
                    {" "}
                    {moment(i.dt_txt).format("HH:mm")}
                  </span>
                  <Image
                    alt={sec.main}
                    width={44}
                    height={44}
                    src={`/icon/${sec.icon}.png`}
                  />
                  <span className="mt-8 lg:mt-4">
                    {kelTOCel(i.main.temp)} C<sup>o</sup>
                  </span>
                </div>
              </>
            ))}
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

export default HourForecast

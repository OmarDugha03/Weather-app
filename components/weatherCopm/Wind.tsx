"use client"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { WindIcon } from "lucide-react"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { SingleSkel } from "../ui/SingleCardSkel"

const Wind = ({}) => {
  const searchParams = useSearchParams()
  const lat = searchParams.get("lat") || 33.5132192
  const lon = searchParams.get("lon") || 36.2768193
  const { data, isPending } = useQuery({
    queryKey: ["weather"],
    queryFn: () => axios.get(`/api/weather?lat=${lat}&lon=${lon}`),
  })
  return (
    <>
      {isPending ? (
        <SingleSkel />
      ) : (
        <>
          <h2 className="flex items-center gap-2 font-medium">
            <WindIcon size={15} /> <span>Wind</span>
          </h2>

          <div className=" relative flex items-center mt-4 justify-center">
            <div className=" relative">
              <Image
                src="/icon/compass_body.svg"
                alt="compass"
                width={110}
                height={110}
              />
              <Image
                src="/icon/compass_arrow.svg"
                alt="compass"
                className="absolute top-0 left-[47%] transition-all duration-500 ease-in-out dark:invert"
                style={{
                  transform: `rotate(${data?.data.wind.deg}deg) translateX(-50%)`,
                  height: "100%",
                }}
                width={11}
                height={11}
              />
            </div>
            <p
              className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-xs
            dark:text-white font-medium">
              {Math.round(data?.data.wind.speed)} m/s
            </p>
          </div>
        </>
      )}
    </>
  )
}

export default Wind

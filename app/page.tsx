"use client"
import CurrentWeather from "@/components/CurrentWeather"
import { getCurrent } from "@/lib/action"
import { WeatherData } from "@/types/weather"
import { useQuery } from "@tanstack/react-query"

export default function Home() {
  const { data: weather } = useQuery<WeatherData>({
    queryKey: ["weather"],
    queryFn: () => getCurrent("12", "45"),
  })
  console.log(weather)
  return (
    <CurrentWeather
      coord={{
        lon: 0,
        lat: 0,
      }}
      weather={[]}
      base={""}
      main={{
        temp: 0,
        feels_like: 0,
        temp_min: 0,
        temp_max: 0,
        pressure: 0,
        humidity: 0,
        sea_level: 0,
        grnd_level: 0,
      }}
      visibility={0}
      wind={{
        speed: 0,
        deg: 0,
        gust: 0,
      }}
      clouds={{
        all: 0,
      }}
      dt={0}
      sys={{
        country: "",
        sunrise: 0,
        sunset: 0,
      }}
      timezone={0}
      id={0}
      name={weather?.name || "No name available"}
      cod={0}
    />
  )
}

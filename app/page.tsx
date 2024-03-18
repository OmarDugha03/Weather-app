import Search from "@/components/Search"
import {
  Air,
  Feelslike,
  HourForecast,
  Humidity,
  Layout,
  Precipitation,
  Pressure,
  FiveDayForecast,
  Ux,
  Visibility,
  Wind,
  Others,
} from "@/components/weatherCopm"
import Sun from "@/components/weatherCopm/Sun"

export const dynamic = "force-dynamic"

export default function Home() {
  return (
    <>
      <Search />
      <Layout
        airpup={<Air />}
        sunr={<Sun />}
        wind={<Wind />}
        HourForecast={<HourForecast />}
        Ux={<Ux />}
        Precipitation={<Precipitation />}
        TenDayForecast={<FiveDayForecast />}
        FeelsLike={<Feelslike />}
        Humidity={<Humidity />}
        Pressure={<Pressure />}
        Visibility={<Visibility />}
        Others={<Others />}
      />
    </>
  )
}

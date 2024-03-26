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
  Current,
  Map,
} from "@/components/weatherCopm"
import Sun from "@/components/weatherCopm/Sun"

export const dynamic = "force-dynamic"

export default async function Home() {
  return (
    <>
      <Search />
      <Layout
        current={<Current />}
        airpup={<Air />}
        sunr={<Sun />}
        wind={<Wind />}
        HourForecast={<HourForecast />}
        Ux={<Ux />}
        Precipitation={<Precipitation />}
        FiveDayForecast={<FiveDayForecast />}
        FeelsLike={<Feelslike />}
        Humidity={<Humidity />}
        Pressure={<Pressure />}
        Visibility={<Visibility />}
        Others={<Others />}
        Map={<Map />}
      />
    </>
  )
}

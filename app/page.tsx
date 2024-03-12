import Search from "@/components/Search"
import Air from "@/components/weatherCopm/Air"
import HourForecast from "@/components/weatherCopm/HourForecast"
import Layout from "@/components/weatherCopm/Layout"
import Sun from "@/components/weatherCopm/Sun"
import Wind from "@/components/weatherCopm/Wind"

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
      />
    </>
  )
}

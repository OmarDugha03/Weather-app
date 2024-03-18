import { ReactNode } from "react"
import { Card } from "@/components/ui/card"
import dynamic from "next/dynamic"

interface LayoutProps {
  airpup: ReactNode
  sunr: ReactNode
  wind: ReactNode
  HourForecast: ReactNode
  Ux: ReactNode
  Precipitation: ReactNode
  FiveDayForecast: ReactNode
  FeelsLike: ReactNode
  Humidity: ReactNode
  Pressure: ReactNode
  Visibility: ReactNode
  Others: ReactNode
}
const Layout = ({
  airpup,
  sunr,
  wind,
  HourForecast,
  Ux,
  Precipitation,
  FiveDayForecast,
  FeelsLike,
  Humidity,
  Pressure,
  Visibility,
  Others,
}: LayoutProps) => {
  const Current = dynamic(() => import("../weatherCopm/Current"), {
    ssr: false,
  })

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-5  grid-rows-5 mb-4 gap-x-4 gap-y-2 px-4 md:container mt-4">
      {/* Top Section */}
      <Card className="lg:row-span-2  p-4">
        <Current />
      </Card>
      <Card className="lg:col-span-2 p-4">{airpup}</Card>
      <Card className=" p-2">{sunr}</Card>
      <Card className=" p-4">{wind}</Card>
      <Card className="lg:col-span-2 p-4">{HourForecast}</Card>
      <Card className=" p-4">{Ux}</Card>
      <Card className=" p-4">{Precipitation}</Card>
      {/* The Second Section */}
      <Card className="lg:row-span-3  p-4">{FiveDayForecast}</Card>
      <Card className=" p-4">{FeelsLike}</Card>
      <Card className=" p-4">{Humidity}</Card>
      <Card className=" p-4">{Visibility}</Card>
      <Card className=" p-4">{Pressure}</Card>

      <Card className="lg:col-span-3 lg:row-span-2 p-4">{}</Card>
      <Card className="lg:row-span-2 p-4">{Others}</Card>
    </div>
  )
}

export default Layout

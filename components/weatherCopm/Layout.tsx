import { ReactNode } from "react"
import { Card } from "@/components/ui/card"
import dynamic from "next/dynamic"

interface LayoutProps {
  airpup: ReactNode
  sunr: ReactNode
  wind: ReactNode
  HourForecast: ReactNode
  current: ReactNode
  Ux: ReactNode
  Precipitation: ReactNode
  FiveDayForecast: ReactNode
  FeelsLike: ReactNode
  Humidity: ReactNode
  Pressure: ReactNode
  Visibility: ReactNode
  Map: ReactNode
  Others: ReactNode
}
const Layout = ({
  airpup,
  sunr,
  wind,
  current,
  HourForecast,
  Ux,
  Precipitation,
  FiveDayForecast,
  FeelsLike,
  Humidity,
  Pressure,
  Visibility,
  Map,
  Others,
}: LayoutProps) => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-5  grid-rows-5 mb-4 gap-x-4 gap-y-2 px-4 md:container mt-4">
      {/* Top Section */}
      <Card className="lg:row-span-2  p-4">{current}</Card>
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

      <Card className="lg:col-span-3 lg:row-span-2 w-full h-full ">{Map}</Card>
      <div className="lg:row-span-2 p-4 ">{Others}</div>
    </div>
  )
}

export default Layout

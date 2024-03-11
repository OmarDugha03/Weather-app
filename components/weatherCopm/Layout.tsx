import { FC, ReactNode } from "react"
import { Card } from "@/components/ui/card"
import dynamic from "next/dynamic"

interface LayoutProps {}
const Layout = ({}: LayoutProps) => {
  const Current = dynamic(() => import("../weatherCopm/Current"), {
    ssr: false,
  })
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-4  grid-rows-5 mb-4 gap-x-4 gap-y-2 px-4 md:container mt-4">
      {/* Top Section */}
      <Card className="lg:row-span-2 p-4">
        <Current />
      </Card>
      <Card className="lg:col-span-2 p-4">{}</Card>
      <Card className=" p-4">{}</Card>
      <Card className="lg:col-span-2 p-4">{}</Card>
      <Card className=" p-4">{}</Card>
      <Card className=" p-4">{}</Card>
      <Card className=" p-4">{}</Card>
      {/* The Second Section */}
      <Card className="lg:row-span-3 p-4">{}</Card>
      <Card className=" p-4">{}</Card>
      <Card className=" p-4">{}</Card>
      <Card className=" p-4">{}</Card>
      <Card className=" p-4">{}</Card>

      <Card className="lg:col-span-3 lg:row-span-2 p-4">{}</Card>
      <Card className="lg:row-span-2 p-4">{}</Card>
    </div>
  )
}

export default Layout
"use client"

import { others } from "../../lib/default"
import Link from "next/link"
import { FC } from "react"

interface OthersProps {}

const Others: FC<OthersProps> = ({}) => {
  return (
    <div className="relative order-last hidden h-[25rem] w-full flex-col justify-between lg:block">
      <h3 className="py-3 font-semibold">Other large cities</h3>
      <div className="flex flex-col space-y-3.5">
        {others.map((item) => (
          <Link
            key={item.city}
            scroll={false}
            href={`/search?lat=${item.coord.lat}&lon=${item.coord.lon}`}
            className="rounded-lg border bg-card px-6 py-4 text-card-foreground shadow-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
            {item.city}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Others

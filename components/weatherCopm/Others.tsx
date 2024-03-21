"use client"

import { useQueryClient } from "@tanstack/react-query"
import { others } from "../../lib/default"
import Link from "next/link"
import { FC } from "react"
import { useRouter } from "next/navigation"

interface OthersProps {}

const Others: FC<OthersProps> = ({}) => {
  const { refresh } = useRouter()
  const queryClient = useQueryClient()
  function handleIn() {
    queryClient.invalidateQueries({ queryKey: ["air", "weather"] })
  }
  return (
    <div className="relative order-last hidden h-[25rem] w-full flex-col justify-between lg:block">
      <h3 className="py-3 font-semibold">Other large cities</h3>
      <div className="flex flex-col space-y-3.5" onClick={handleIn}>
        {others.map((item) => (
          <Link
            href={`/search?lat=${item.coord.lat}&lon=${item.coord.lon}`}
            key={item.city}
            className="rounded-lg border bg-card px-6 py-4 text-card-foreground shadow-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
            {item.city}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Others

"use client"
import { useQueryClient } from "@tanstack/react-query"
import { others } from "../../lib/default"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
const Others = ({}) => {
  const searchParams = useSearchParams()

  const lat = searchParams.get("lat") || 33.5132192
  const lon = searchParams.get("lon") || 36.2768193
  const queryClient = useQueryClient()
  const router = useRouter()
  function handleIn() {
    queryClient.invalidateQueries()
    router.push(`/search?lat=${lat}&lon=${lon}`)
  }
  return (
    <div className="relative order-last  h-[25rem] w-full flex-col justify-between ">
      <h3 className="py-3 font-semibold">Other large cities</h3>
      <div className="flex flex-col space-y-3.5" onClick={() => handleIn}>
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

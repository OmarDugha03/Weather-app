import { Skeleton } from "@/components/ui/skeleton"

export function CarouselSkel() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[170px] w-full rounded-xl" />
    </div>
  )
}

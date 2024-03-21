import { Skeleton } from "@/components/ui/skeleton"

export function SingleSkel() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[190px] w-full rounded-xl" />
    </div>
  )
}

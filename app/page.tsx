import Search from "@/components/Search"
import Air from "@/components/weatherCopm/Air"
import Layout from "@/components/weatherCopm/Layout"

export const dynamic = "force-dynamic"

export default function Home() {
  return (
    <>
      <Search />
      <Layout airpup={<Air />} />
    </>
  )
}

"use client"

import Search from "@/components/Search"
import { logo } from "@/public/image"
import { WeatherData } from "@/types/weather"
import { useQuery } from "@tanstack/react-query"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <Search />
    </>
  )
}

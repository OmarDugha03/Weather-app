"use client"
import { FC } from "react"
import { ThemeChanger } from "./ui/themechanger"
import Image from "next/image"
import { logo } from "@/public/image"

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <nav className="mx-2 md:container flex justify-between items-center mt-4">
      <Image
        src={logo}
        alt="logo"
        className="w-48 bg-black dark:bg-transparent p-2 rounded-md"
      />
      <ThemeChanger />
    </nav>
  )
}

export default Navbar

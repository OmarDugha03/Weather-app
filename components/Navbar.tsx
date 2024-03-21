"use client"
import { FC } from "react"
import { ThemeChanger } from "./ui/themechanger"
import Image from "next/image"
import { logo } from "@/public/image"
import { useRouter } from "next/navigation"

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const { push } = useRouter()
  return (
    <nav className="mx-2 md:container flex justify-between items-center mt-4">
      <Image
        src={logo}
        onClick={() => push("/")}
        alt="logo"
        className="w-48  dark:bg-transparent bg-black p-2 cursor-pointer rounded-md"
      />
      <ThemeChanger />
    </nav>
  )
}

export default Navbar

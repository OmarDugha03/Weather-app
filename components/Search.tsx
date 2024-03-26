"use client"
import { FC } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"

import { Input } from "@/components/ui/input"
import { DEFAULT_SUGGESTIONS } from "@/lib/default"

interface SearchProps {}

const Search: FC<SearchProps> = ({}) => {
  return (
    <section className="w-full mt-4 px-3 md:container ">
      {/* Trigger */}
      <Dialog>
        <DialogTrigger asChild className="w-full ">
          <span className="gap-x-5 items-center flex flex-col lg:flex-row space-y-3">
            <Input
              placeholder="Country name "
              className="w-full lg:mt-3 lg:w-[600px] lg:h-10"
            />
            <Button className="w-full lg:w-[200px]">Submit</Button>
          </span>
        </DialogTrigger>
        <DialogContent className="w-[90%] md:w-full">
          <DialogHeader>
            <DialogTitle className="py-4">Search for any country !</DialogTitle>
            <DialogDescription>
              {/* Main Functionality  */}
              <Command className="">
                <CommandInput placeholder="Type the name of the country ...." />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup heading="Suggestions">
                    {DEFAULT_SUGGESTIONS.map((i) => (
                      <CommandItem key={i.description}>
                        {i.description}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  )
}

export default Search
/*  */

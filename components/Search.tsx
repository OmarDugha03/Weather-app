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
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

interface SearchProps {}
const formSchema = z.object({
  country: z.string().min(2).max(50),
})

const Search: FC<SearchProps> = ({}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      country: "",
    },
  })
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }
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
            <DialogTitle>Search for any country !</DialogTitle>
            <DialogDescription>
              {/* Main Functionality  */}
              <Command className="">
                <CommandInput placeholder="Type the name of the country ...." />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup heading="Suggestions">
                    <CommandItem>Calendar</CommandItem>
                    <CommandItem>Search Emoji</CommandItem>
                    <CommandItem>Calculator</CommandItem>
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
/*   <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="flex flex-col  space-y-2 w-full justify-between  gap-x-3">
                  <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Country name "
                            className="w-full"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit">Submit</Button>
                </form>
              </Form> */

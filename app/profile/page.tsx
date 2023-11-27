"use client"
import React from 'react';
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {Button} from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import * as z from "zod"


const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  lastName: z.string(),
  email: z.string().email(),
  password: z.string(),
})

function Page() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <div className={"flex justify-center items-center py-10"}>
      <div className={"w-[500px]"}>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="firstName"
              render={({field}) => (
                <FormItem className={"profile-form-field"}>
                  <FormLabel className={"profile-form-label text-xl"}>First name:</FormLabel>
                  <FormControl className={"profile-form-input"}>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage className={"col-span-9"}/>
                </FormItem>

              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({field}) => (
                <FormItem className={"profile-form-field"}>
                  <FormLabel className={"profile-form-label text-xl"}>Last name:</FormLabel>
                  <FormControl className={"profile-form-input"}>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage className={"col-span-9"}/>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({field}) => (
                <FormItem className={"profile-form-field"}>
                  <FormLabel className={"profile-form-label text-xl"}>Email:</FormLabel>
                  <FormControl className={"profile-form-input"}>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage className={"col-span-9"}/>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({field}) => (
                <FormItem className={"profile-form-field"}>
                  <FormLabel className={"profile-form-label text-xl"}>Password:</FormLabel>
                  <FormControl className={"profile-form-input"}>
                    <Input type={"password"} {...field} />
                  </FormControl>
                  <FormMessage className={"col-span-9"}/>
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default Page;
"use client"
import React from 'react';
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {Button} from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import * as z from "zod"
import {useToast} from "@/components/ui/use-toast"
import {USER_DEMO_DATA} from "@/utils/demo-data";


const formSchema = z.object({
  firstName: z.string().min(2).max(25),
  lastName: z.string().min(2).max(25),
  email: z.string().email().max(50).min(3),
  //password: z.string(),
})

function Page() {
  const {toast} = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: USER_DEMO_DATA.name.split(" ")[0],
      lastName: USER_DEMO_DATA.name.split(" ")[1],
      email: USER_DEMO_DATA.emailAddress,
      //password: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    toast({
      description: "Succesfully changed your profile",
    });
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
                    <Input data-testid={"action-first-name"} {...field} />
                  </FormControl>
                  <FormMessage data-testid={"error-first-name"} className={"col-span-9"}/>
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
                    <Input data-testid={"action-last-name"} {...field} />
                  </FormControl>
                  <FormMessage data-testid={"error-last-name"} className={"col-span-9"}/>
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
                    <Input data-testid={"action-email"} {...field} />
                  </FormControl>
                  <FormMessage data-testid={"error-email"} className={"col-span-9"}/>
                </FormItem>
              )}
            />
            {/*<FormField
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
            />*/}
            <Button data-cy="submit" type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default Page;
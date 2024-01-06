"use client"
import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from "next/link";

const formSchema = z.object({
  email: z.string().min(2).email().max(30),
  password: z.string().min(6).max(25),
})
interface IProps {

}
const SignInForm: React.FC<IProps> = ({}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div>
      <div className={"bg-white w-[400px] py-6 px-10 rounded-xl shadow-md"}>
        <h1 className={"text-center text-2xl mb-6 font-semibold"}>Login</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type={"password"} placeholder="Password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className={"w-full flex justify-center"}>
              <Button type="submit">login</Button>
            </div>
          </form>
        </Form>
      </div>
      <p className={"text-center mt-2"}>You do not have an account? <Link className={"text-primary-color hover:underline"} href={"/"}>Sign up</Link></p>
    </div>
  );
}

export default SignInForm;
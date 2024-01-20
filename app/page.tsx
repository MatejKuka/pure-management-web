"use client"
import SignUpForm from "@/components/user-components/SignUpForm";
import RootPageLayout from "@/components/page-layouts/RootPageLayout";
import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {AppDispatch, useAppSelector} from "@/redux/store";
import {fetchUser, IUser} from "@/redux/features/auth-slice";
import {useRouter} from "next/navigation";


export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter()

  return (
    <RootPageLayout>
      <SignUpForm onSubmitForm={(values) => {
        const User: IUser = {
          id: 1,
          name: values.firstName,
          role: "Admin",
          emailAddress: values.email,
          password: values.password,
          companyId: 45,
          company: values.companyName
        }
        dispatch(fetchUser(User));
        router.push("/" + User.companyId.toString());
      }} />
    </RootPageLayout>
  )
}

"use client"
import SignUpForm from "@/components/user-components/SignUpForm";
import RootPageLayout from "@/components/page-layouts/RootPageLayout";
import {useQuery} from "@tanstack/react-query";
import {Warehouse} from "@/utils/types/warehouse";
import myAxios from "@/API";
import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {AppDispatch} from "@/redux/store";
import {fetchUser, IUser} from "@/redux/features/auth-slice";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const { data, isLoading, isError} = useQuery<IUser>({
    queryKey: ["login"],
    queryFn: async () => {
      const response = await myAxios.get(`User/${localStorage.getItem("userId")}`)
      return response.data;
    }
  });

  useEffect(() => {
    if (data) dispatch(fetchUser(data));
  },[data]);

  if (isLoading) return (
    <div>Loading...</div>
  )

  if (isError) return (
    <div>Error.</div>
  )

  if (!data && !isError) return (
    <RootPageLayout>
      <SignUpForm />
    </RootPageLayout>
  )
}

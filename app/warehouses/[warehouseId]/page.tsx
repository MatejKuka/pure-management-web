"use client"
import React from 'react';
import {useQuery} from "@tanstack/react-query";
import {Warehouse} from "@/utils/types/warehouse";
import myAxios from "@/API";

function Page({params}: { params: { warehouseId: string } }) {

  const { data, isLoading, isError } = useQuery<Warehouse>({
    queryKey: ["warehouse", params.warehouseId],
    queryFn: async () => {
      const response = await myAxios.get(`Warehouse/${params.warehouseId}`)
      return response.data;
    }
  });

  if (isLoading) return (
    <div>Loading...</div>
  )

  if (isError) return (
    <div>Not found.</div>
  )

  return (
    <div>
      <p>{params.warehouseId}</p>
      <p>Name: {data?.name}</p>
      <p>Address: {data?.address}</p>
      <p>Email address: {data?.emailAddress}</p>
    </div>
  );
}

export default Page;
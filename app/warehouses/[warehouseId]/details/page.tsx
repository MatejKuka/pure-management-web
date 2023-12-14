"use client"
import React, {useEffect} from 'react';
import {useQuery} from "@tanstack/react-query";
import {Warehouse} from "@/utils/types/warehouse";
import myAxios from "@/API";
import {Button} from "@/components/ui/button";
import {useMutation} from "@tanstack/react-query";
import {deleteWarehouse, setWarehouse} from "@/redux/features/warehouse-slice";
import {AppDispatch, useAppSelector} from "@/redux/store";
import {useDispatch} from "react-redux";
import { useRouter } from 'next/navigation';
async function deleteWarehouseAPI(warehouseId: number | string) {
  return await myAxios.delete(`Warehouse/${warehouseId}`)
}



function Page({params}: { params: { warehouseId: string } }) {
  const warehouse = useAppSelector(state => state.warehouseReducer.value);
  const dispatch = useDispatch<AppDispatch>();

  const { push } = useRouter();

  const {mutateAsync} = useMutation({
    mutationKey: ["delete-warehouse"],
    mutationFn: deleteWarehouseAPI
  });

  const { data, isLoading, isError, refetch } = useQuery<Warehouse>({
    queryKey: ["warehouse", params.warehouseId],
    queryFn: async () => {
      const response = await myAxios.get(`Warehouse/${params.warehouseId}`)
      return response.data;
    }, enabled: false
  });

  useEffect(() => {
    if (!warehouse || Number(params.warehouseId) !== warehouse.id) {
      refetch();
    }
  }, [warehouse]);

  useEffect(() => {
    if (data) {
      dispatch(setWarehouse(data));
    }
  }, [data]);

  async function deleteWarehouseHandler() {
    const data: { status: number } = await mutateAsync(params.warehouseId);
    if (data.status === 200) {
      dispatch(deleteWarehouse());
      push("/warehouses");
    };
  }

  if (isLoading) return (
    <div>Loading...</div>
  )

  if (isError) return (
    <div>Not found.</div>
  )

  return (
    <div className={"flex gap-4 flex-col justify-center items-center pt-24"}>
      <p className={"warehouse-details-paragraph"}><span>Name:</span> {warehouse?.name}</p>
      <p className={"warehouse-details-paragraph"}><span>Address:</span> {warehouse?.address}</p>
      <p className={"warehouse-details-paragraph"}><span>Email address:</span> {warehouse?.emailAddress}</p>
      <Button onClick={deleteWarehouseHandler}>Delete</Button>
    </div>
  );
}

export default Page;
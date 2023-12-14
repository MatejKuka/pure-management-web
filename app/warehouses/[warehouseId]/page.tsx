"use client"
import React, {useEffect} from 'react';
import {useQuery} from "@tanstack/react-query";
import {Warehouse} from "@/utils/types/warehouse";
import myAxios from "@/API";
import {AppDispatch, useAppSelector} from "@/redux/store";
import {useDispatch} from "react-redux";
import {setWarehouse} from "@/redux/features/warehouse-slice";
import WarehouseOptionCard from "@/components/warehouse/WarehouseOptionCard";

function Page({params}: { params: { warehouseId: string } }) {
  const warehouse = useAppSelector(state => state.warehouseReducer.value);
  const dispatch = useDispatch<AppDispatch>();

  const {data, isLoading, isError, refetch} = useQuery<Warehouse>({
    queryKey: ["warehouse", params.warehouseId],
    queryFn: async () => {
      const response = await myAxios.get(`Warehouse/${params.warehouseId}`)
      return response.data;
    },
    enabled: false,
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


  return (
    <div>
      <h1 className={"h1-table-element"}>{warehouse?.name}</h1>
      <div className={"flex justify-center gap-4"}>
        <WarehouseOptionCard name={"Details"} redirectUrl={`${params.warehouseId}/details`} />
        <WarehouseOptionCard name={"Storage Items"} redirectUrl={`${params.warehouseId}/storage-items`} />
        <WarehouseOptionCard name={"Assigned Users"} redirectUrl={`${params.warehouseId}/users`} />
      </div>
    </div>
  )
}

export default Page;
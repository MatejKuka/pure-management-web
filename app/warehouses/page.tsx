"use client"
import React, {useEffect, useState} from 'react';
import AddNewWarehouseDialog from "@/components/global-warehouses/AddNewWarehouseDialog";
import WarehouseCard from "@/components/global-warehouses/WarehouseCard";
import {useQuery} from "@tanstack/react-query";
import myAxios from "@/API";
import {Warehouse} from "@/utils/types/warehouse";

function Page() {
  const [warehouses, setNewWarehouses] = useState<Warehouse[] | null>(null);
  const { data, isLoading, isError} = useQuery<Warehouse[]>({
    queryKey: ["warehouses"],
    queryFn: async () => {
      const response = await myAxios.get("Warehouse")
      return response.data;
    }
  });

  useEffect(() => {
    if (data) setNewWarehouses(data);
  },[data]);

  if (isLoading) return (
    <div>Loading...</div>
  )

  if (isError) return (
    <div>Not found.</div>
  )

  return (
    <div>
      <div>
        <div className={"flex items-center"}>
          <h1 className={"h1-table-element"}>All warehouses</h1>
          <AddNewWarehouseDialog onCreateWarehouse={(newWarehouse) => setNewWarehouses((oldArray) => {
            if (oldArray) return [...oldArray, newWarehouse]
            else return [newWarehouse]
          })} />
        </div>
        <div>
          {warehouses?.map(warehouse => (
            <WarehouseCard key={warehouse.id} name={warehouse.name} address={warehouse.address} redirectUrlPath={"warehouses/" + warehouse.id.toString()}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
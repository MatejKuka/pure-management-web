"use client"
import React, {useEffect} from 'react';
import AddNewWarehouseDialog from "@/components/global-warehouses/AddNewWarehouseDialog";
import WarehouseCard from "@/components/global-warehouses/WarehouseCard";
import {useQuery} from "@tanstack/react-query";
import myAxios from "@/API";
import {Warehouse} from "@/utils/types/warehouse";

function Page() {
  const { data} = useQuery<Warehouse[]>({
    queryKey: ["warehouses"],
    queryFn: async () => {
      const response = await myAxios.get("Warehouse")
      return response.data;
    }
  });


  return (
    <div>
      <div>
        <div className={"flex items-center"}>
          <h1 className={"h1-table-element"}>All warehouses</h1>
          <AddNewWarehouseDialog />
        </div>
        <div>
          {data?.map(warehouse => (
            <WarehouseCard key={warehouse.id} name={warehouse.name} address={warehouse.address} redirectUrlPath={"warehouses/" + warehouse.id.toString()}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
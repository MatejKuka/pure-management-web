"use client"
import React, {useState} from 'react';
import AddNewWarehouseDialog from "@/components/global-warehouses/AddNewWarehouseDialog";
import WarehouseCard from "@/components/global-warehouses/WarehouseCard";

import {Warehouse} from "@/utils/types/warehouse";
import {WAREHOUSES_DEMO_DATA} from "@/utils/demo-data";

function Page() {
  const [warehouses, setNewWarehouses] = useState<Warehouse[]>(WAREHOUSES_DEMO_DATA);

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
          {WAREHOUSES_DEMO_DATA?.map(warehouse => (
            <WarehouseCard key={warehouse.id} warehouse={warehouse} redirectUrlPath={"warehouses/" + warehouse.id.toString()}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
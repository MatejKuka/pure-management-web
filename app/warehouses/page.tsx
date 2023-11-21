"use client"
import React from 'react';
import AddNewWarehouseDialog from "@/components/global-warehouses/AddNewWarehouseDialog";
import WarehouseCard from "@/components/global-warehouses/WarehouseCard";
import {WAREHOUSES_DEMO_DATA} from "@/utils/demo-data";

function Page() {
  return (
    <div>
      <div>
        <div className={"flex items-center"}>
          <h1 className={"h1-table-element"}>All warehouses</h1>
          <AddNewWarehouseDialog />
        </div>
        <div>
          {WAREHOUSES_DEMO_DATA.map(warehouse => (
            <WarehouseCard key={warehouse.id} name={warehouse.name} address={warehouse.address} redirectUrlPath={"warehouses/" + warehouse.id.toString()}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
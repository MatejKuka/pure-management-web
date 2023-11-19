"use client"
import React, {useState} from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {Button} from "@/components/ui/button";
import AddNewItemDialog from "@/components/global-items/AddNewItemDialog";
import {ITEMS_DEMO_DATA} from "@/utils/demo-data";
import {ItemObject} from "@/utils/types/Item";

function Page() {
  const [currentItem, setCurrentItem] = useState<ItemObject | undefined>();

  return (
    <div>
      <div className={"flex items-center gap-0"}>
        <h1 className={"h1-table-element"}>Your items</h1>
        <AddNewItemDialog />
      </div>
      <Table className={"w-auto"}>
        {/*<TableCaption>A list of your recent invoices.</TableCaption>*/}
        <TableHeader>
          <TableRow>
            <TableHead className={"header-table-row-element text-white"}>Id</TableHead>
            <TableHead className={"header-table-row-element text-white"}>Name</TableHead>
            <TableHead className={"header-table-row-element text-white"}>Warehouse</TableHead>
            <TableHead className={"header-table-row-element text-white"}>PricePerUnit</TableHead>
            <TableHead className={"header-table-row-element text-white"}>Quantity</TableHead>
            <TableHead className={"header-table-row-element text-white"}>Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
            {ITEMS_DEMO_DATA.map(item => (
              <TableRow onClick={()=> setCurrentItem(item)}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.warehouse}</TableCell>
                <TableCell>{item.pricePerUnit}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>{item.total}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <Button disabled={!currentItem}>Update</Button>
    </div>
  );
}

export default Page;
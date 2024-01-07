import React, {useState} from 'react';
import AddNewItemDialog from "@/components/global-items/AddNewItemDialog";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Button} from "@/components/ui/button";
import {Product} from "@/utils/types/Product";
import {useQuery} from "@tanstack/react-query/build/modern/index";
import myAxios from "@/API";

function Page() {
  const [currentItem, setCurrentItem] = useState<Product | undefined>();

  const { data, isLoading, isError} = useQuery<Product[]>({
    queryKey: ["warehouse-your-items"],
    queryFn: async () => {
      const response = await myAxios.get(`Warehouses/${params.warehouseId}`, {
        companyId: localStorage.getItem("companyId")
      })
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
          {data?.map(item => (
            <TableRow key={item.id} onClick={()=> setCurrentItem(item)}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.warehouse}</TableCell>
              <TableCell>{item.pricePerUnit}</TableCell>
              <TableCell>{item.quantity ? item.quantity : 50}</TableCell>
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
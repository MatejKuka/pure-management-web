import React, {useState} from 'react';
import AddNewItemDialog from "@/components/global-items/AddNewItemDialog";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Button} from "@/components/ui/button";
import {Product} from "@/utils/types/Product";
import {useQuery} from "@tanstack/react-query";
import myAxios from "@/API";

function Page() {
  const [currentUsers, setCurrentUsers] = useState<Users[] | undefined>();

  const { data, isLoading, isError} = useQuery<Product[]>({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await myAxios.get(`companyusers/${localStorage.getItem("companyId")}`)
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
        <h1 className={"h1-table-element"}>Users</h1>
        <AddNewItemDialog />
      </div>
      <Table className={"w-auto"}>
        <TableHeader>
          <TableRow>
            <TableHead className={"header-table-row-element text-white"}>Id</TableHead>
            <TableHead className={"header-table-row-element text-white"}>Name</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map(item => (
            <TableRow key={item.id} onClick={()=> setCurrentUsers(item)}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button disabled={!currentUsers}>Update</Button>
    </div>
  );
}

export default Page;
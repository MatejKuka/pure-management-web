"use client"
import React, {useState} from 'react';
import AddNewItemDialog from "@/components/global-items/AddNewItemDialog";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Button} from "@/components/ui/button";
import {USERS_DEMO_DATA} from "@/utils/demo-data";
import {IUser} from "@/redux/features/auth-slice";
import AddNewUserDialog from "@/components/user-components/AddNewUserDialog";

function Page() {
  const [currentUser, setCurrentUser] = useState<IUser>();

  return (
    <div>
      <div className={"flex items-center gap-0"}>
        <h1 className={"h1-table-element"}>Users</h1>
        <AddNewUserDialog onSubmitForm={(values) => console.log(values)}/>
      </div>
      <Table className={"w-auto"}>
        <TableHeader>
          <TableRow>
            <TableHead className={"header-table-row-element text-white"}>Id</TableHead>
            <TableHead className={"header-table-row-element text-white"}>Name</TableHead>
            <TableHead className={"header-table-row-element text-white"}>Role</TableHead>
            <TableHead className={"header-table-row-element text-white"}>Email Address</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {USERS_DEMO_DATA?.map(item => (
            <TableRow key={item.id} onClick={()=> setCurrentUser(item)}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.role}</TableCell>
              <TableCell>{item.emailAddress}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button disabled={!currentUser}>Update</Button>
    </div>
  );
}

export default Page;
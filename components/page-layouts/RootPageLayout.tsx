import React from 'react';
import {Toaster} from "@/components/ui/toaster";
import PureManagementLogo from "@/public/pure-management-logo.png";
import Image from "next/image";


interface IProps {
  children: React.ReactNode
}

const RootPageLayout: React.FC<IProps> = ({children}) => {
  return (
    <>
      <main className={"bg-gray-100 flex justify-center items-center w-[100vw] h-[100vh]"}>
        <Image width={500} className={"absolute top-8"} alt={"Pure Management Logo"} src={PureManagementLogo} />
        <h2 className={"absolute top-32 text-xl font-semibold"}>The Software Management System</h2>
        {children}
      </main>
      <Toaster data-testid={"action-toast"} />
    </>
  );
}

export default RootPageLayout;
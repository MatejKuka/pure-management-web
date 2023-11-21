import React from 'react';
import Image from 'next/image'
import PureManagementLogo from "../../public/pure-management-logo.png";
import Link from "next/link";

function Navigation() {
  return (
    <nav className={"p-6"}>
      <div className={"max-w-[20%]"}><Link href={"/"}><Image src={PureManagementLogo} alt={"Pure Management Logo"}/></Link></div>
    </nav>
  );
}

export default Navigation;
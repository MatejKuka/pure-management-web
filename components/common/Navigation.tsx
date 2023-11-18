import React from 'react';
import Image from 'next/image'
import PureManagementLogo from "../../public/pure-management-logo.png";

function Navigation() {
  return (
    <nav className={"p-6"}>
      <div className={"max-w-[20%]"}><Image src={PureManagementLogo} alt={"Pure Management Logo"}/></div>
    </nav>
  );
}

export default Navigation;
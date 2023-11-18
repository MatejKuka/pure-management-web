import React from 'react';
import SidebarItem from "@/components/common/sidebar/SidebarItem";
import BoxIcon from "../../../public/box.svg";
import WarehouseIcon from "../../../public/warehouse.svg";

function Sidebar() {
  return (
    <aside className={"inline h-[100%] col-span-2 p-4 mx-auto"}>
      <SidebarItem alt={"Your items"} imagePath={BoxIcon} text={"Your items"} />
      <SidebarItem alt={"Warehouses"} imagePath={WarehouseIcon} text={"Warehouses"} />
    </aside>
  );
}

export default Sidebar;
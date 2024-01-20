"use client"
import React from 'react';
import Image from 'next/image'
import PureManagementLogo from "../../public/pure-management-logo.png";
import SettingsImage from "../../public/settings.svg";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import UserProfileImage from "../../public/user-profile-photo.png";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {USER_DEMO_DATA} from "@/utils/demo-data";
import { Separator } from "@/components/ui/separator"
import SidebarItem from "@/components/common/sidebar/SidebarItem";
import {useDispatch} from "react-redux";
import {AppDispatch} from "@/redux/store";
import {logout} from "@/redux/features/auth-slice";

function Navigation() {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <nav className={"p-6 flex justify-between"}>
      <div className={"max-w-[20%]"}><Link href={"/1/your-items"}><Image src={PureManagementLogo} alt={"Pure Management Logo"}/></Link></div>
      <Popover>
        <PopoverTrigger>
          <Avatar>
          <AvatarImage src={UserProfileImage.src} />
          <AvatarFallback>Profile</AvatarFallback>
        </Avatar>
        </PopoverTrigger>
        <PopoverContent>
          <p className={"font-bold text-xl"}>{USER_DEMO_DATA.name}</p>
          <p className={"pl-2 font-semibold"}>role: {USER_DEMO_DATA.role}</p>
          <p className={"mb-4 pl-2"}>{USER_DEMO_DATA.company}</p>
          <Separator />
          <SidebarItem className={"justify-center"} alt={"Profile settings"} redirectUrlPath={"/profile"} text={"Profile settings"} imagePath={SettingsImage} />
          <p className={"text-primary-color text-center text-xl cursor-pointer"} onClick={() => dispatch(logout())}>Log out</p>
        </PopoverContent>
      </Popover>
    </nav>
  );
}

export default Navigation;
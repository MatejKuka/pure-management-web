import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import {twMerge} from "tailwind-merge";


interface IProps extends React.ComponentPropsWithoutRef<"div"> {
  imagePath: string;
  text: string;
  alt: string;
  redirectUrlPath: string;
}
const SidebarItem: React.FC<IProps> = (props) => {
  const {text, imagePath, alt, redirectUrlPath, className, ...divProps} = props;

  return (
    <Link href={redirectUrlPath}>
    <div {...divProps} className={twMerge("p-2 flex items-center cursor-pointer gap-2", className)}>
      <Image src={imagePath} height={30} width={30} className={"inline"} alt={alt}/>
      <strong className={"text-primary-color text-xl"}>{text}</strong>
    </div>
    </Link>
  );
}

export default SidebarItem;
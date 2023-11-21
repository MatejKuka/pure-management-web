import React from 'react';
import Image from 'next/image'
import Link from 'next/link'

type IProps = {
  imagePath: string;
  text: string;
  alt: string;
  redirectUrlPath: string;
}
const SidebarItem: React.FC<IProps> = ({text, imagePath, alt, redirectUrlPath}) => {
  return (
    <Link href={redirectUrlPath}>
    <div className={"p-2 flex items-center cursor-pointer gap-2"}>
      <Image src={imagePath} height={30} width={30} className={"inline"} alt={alt}/>
      <strong className={"text-primary-color text-xl"}>{text}</strong>
    </div>
    </Link>
  );
}

export default SidebarItem;
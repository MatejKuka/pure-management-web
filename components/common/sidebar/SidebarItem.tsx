import React from 'react';
import Image from 'next/image'

type IProps = {
  imagePath: string;
  text: string;
  alt: string;
}
const SidebarItem: React.FC<IProps> = ({text, imagePath, alt}) => {
  return (
    <div className={"p-2 flex items-center cursor-pointer gap-2"}>
      <Image src={imagePath} height={30} width={30} className={"inline"} alt={alt}/>
      <strong className={"text-primary text-xl"}>{text}</strong>
    </div>
  );
}

export default SidebarItem;
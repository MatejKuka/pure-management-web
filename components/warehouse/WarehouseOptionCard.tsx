import React from 'react';
import Link from "next/link";

interface IProps {
  redirectUrl: string;
  name: string
}

const WarehouseOptionCard: React.FC<IProps> = ({redirectUrl, name}) => {
  return (
    <Link href={redirectUrl}>
      <div className={"bg-gray-100 w-[300px] h-[200px] flex justify-center items-center rounded-2xl cursor-pointer"}>
        <h2 className={"h2-element"}>{name}</h2>
      </div>
    </Link>
  );
}

export default WarehouseOptionCard;
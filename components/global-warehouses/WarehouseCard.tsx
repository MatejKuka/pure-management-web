import React from 'react';
import ArrowRight from "../../public/arrow-right.svg";
import Image from "next/image";
import Link from "next/link";

interface IProps {
  name: string;
  address: string;
  redirectUrlPath: string;
}

const WarehouseCard: React.FC<IProps> = ({address, name, redirectUrlPath}) => {
  return (
    <Link href={redirectUrlPath}>
      <div className={"shadow-xl w-[40rem] p-4 rounded-xl cursor-pointer flex justify-between"}>
        <div>
          <h3 className={"text-primary-color font-bold text-2xl"}>{name}</h3>
          <p className={"font-semibold pl-2 text-gray-500"}>{address}</p>
        </div>
        <Image alt={"Arrow right"} src={ArrowRight}/>
      </div>
    </Link>
  );
}

export default WarehouseCard;
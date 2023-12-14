import React from 'react';
import ArrowRight from "../../public/arrow-right.svg";
import Image from "next/image";
import Link from "next/link";
import {Warehouse} from "@/utils/types/warehouse";
import {setWarehouse} from "@/redux/features/warehouse-slice";
import {useDispatch} from "react-redux";
import {AppDispatch} from "@/redux/store";

interface IProps {
  warehouse: Warehouse;
  redirectUrlPath: string;
}

const WarehouseCard: React.FC<IProps> = ({warehouse, redirectUrlPath}) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Link onClick={() => {dispatch(setWarehouse(warehouse));}} href={redirectUrlPath}>
      <div className={"shadow-xl w-[40rem] p-4 rounded-xl cursor-pointer flex justify-between"}>
        <div>
          <h3 className={"text-primary-color font-bold text-2xl"}>{warehouse.name}</h3>
          <p className={"font-semibold pl-2 text-gray-500"}>{warehouse.address}</p>
        </div>
        <Image alt={"Arrow right"} src={ArrowRight}/>
      </div>
    </Link>
  );
}

export default WarehouseCard;
import {ItemObject} from "@/utils/types/Item";
import {Warehouse} from "@/utils/types/warehouse";

const createItemObject = (id: number, name: string, warehouse: string, pricePerUnit: number, quantity: number): ItemObject => {
  const total = pricePerUnit * quantity;
  return {
    id,
    name,
    warehouse,
    quantity,
    pricePerUnit,
    total: Number(total.toFixed(2)),
  }
}

const ITEMS_DEMO_DATA = [
  createItemObject(1, "Jordans", "Copenhagen Valby 2500", 5.5, 100),
  createItemObject(2, "Nike", "Zvolen warehouse n.1", 10, 120),
  createItemObject(3, "White color", "Copenhagen Valby 2500", 20.5, 250),
  createItemObject(4, "Bla bla", "Zvolen warehouse n.1", 1, 100),
  createItemObject(5, "fsdfdsfs", "Copenhagen Valby 2500", 4.2, 14),
];

const createWarehouseObject = (id: number, name: string, address: string, emailAddress: string): Warehouse => {
  return {
    id,
    name,
    address,
    emailAddress,
  }
}

const WAREHOUSES_DEMO_DATA = [
  createWarehouseObject(1, "Copenhagen Warehouse n.1", "Vigerslevvej 344, 2500 Valby", "matokuka66@gmail.com"),
  createWarehouseObject(2, "Budova vo Zvolene", "Moyzesova 16, Zvolen", "matokuka66@gmail.com"),
  createWarehouseObject(3, "Copenhagen Warehouse n.1", "Vigerslevvej 344, Dubnica", "matokuka66@gmail.com"),
  createWarehouseObject(4, "Copenhagen Warehouse n.1", "Námestie SNP, BB", "matejkuka@contact.com"),
  createWarehouseObject(5, "Copenhagen Warehouse n.1", "Vigerslevvej 344, 2500 Valby", "matokuka66gdfg@gmail.com"),
];

export {
  createItemObject,
  ITEMS_DEMO_DATA,
  WAREHOUSES_DEMO_DATA,
  createWarehouseObject
};
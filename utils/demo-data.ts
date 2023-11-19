import {ItemObject} from "@/utils/types/Item";

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

export {createItemObject, ITEMS_DEMO_DATA};
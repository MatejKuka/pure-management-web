import {Product} from "@/utils/types/Product";
import {Warehouse} from "@/utils/types/warehouse";
import {IUser} from "@/redux/features/auth-slice";

const createItemObject = (id: number, name: string, warehouse: string, pricePerUnit: number, quantity: number): Product => {
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

const createWarehouseObject = (id: number, name: string, address: string, emailAddress: string, companyId: number): Warehouse => {
  return {
    id,
    name,
    address,
    emailAddress,
    companyId
  }
}

const WAREHOUSES_DEMO_DATA = [
  createWarehouseObject(1, "Copenhagen Warehouse n.1", "Vigerslevvej 344, 2500 Valby", "matokuka66@gmail.com", 1),
  createWarehouseObject(2, "Budova vo Zvolene", "Moyzesova 16, Zvolen", "matokuka66@gmail.com", 1),
  createWarehouseObject(3, "Copenhagen Warehouse n.2", "Vigerslevvej 344, Dubnica", "matokuka66@gmail.com", 1),
  createWarehouseObject(4, "Copenhagen Warehouse n.1", "Námestie SNP, BB", "matejkuka@contact.com", 15),
  createWarehouseObject(5, "Esbjerg central warehouse", "Vigerslevvej 344, 2500 Valby", "matokuka66gdfg@gmail.com", 1),
];

const USER_DEMO_DATA = {
  id: 1,
  name: "Matej Kuka",
  role: "Admin",
  emailAddress: "matokuka66@gmail.com",
  password: "***********",
  companyId: 45,
  company: "Zvolenský s.r.o"
}

const createUserObject = (id: number, name: string, role: string, emailAddress: string, password: string, companyId: number, company: string): IUser => {
  return {
    id,
    name,
    role,
    emailAddress,
    password,
    companyId,
    company
  };
};

const USERS_DEMO_DATA = [
  createUserObject(2, "Milos Jozek", "User", "fsdfsd1778@easv365.dk", "rrr", 1, "Zvolenský"),
  createUserObject(2, "Sam Altman", "User", "matedsf78@easv365.dk", "rrr", 1, "Zvolenský"),
  createUserObject(2, "Mikel Mikelsen", "User", "jozek789@easv365.dk", "rrr", 1, "Zvolenský"),
  createUserObject(2, "Alvaro Rodrigez", "User", "sdads@@easv365.dk", "rrr", 1, "Zvolenský"),
]

export {
  createItemObject,
  ITEMS_DEMO_DATA,
  WAREHOUSES_DEMO_DATA,
  createWarehouseObject,
  USER_DEMO_DATA,
  USERS_DEMO_DATA,
};
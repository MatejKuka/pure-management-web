export type Warehouse = {
  id: number;
  name: string;
  address: string;
  emailAddress: string;
  companyId: number
};

export type CreateWarehouse = {
  name: string;
  address: string;
  emailAddress: string;
  companyId: number
};
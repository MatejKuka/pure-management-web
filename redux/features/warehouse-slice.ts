import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Warehouse} from "@/utils/types/warehouse";

const initialState: {value: Warehouse[]} = {
  value: [] as Warehouse[]
}

export const warehouseSlice = createSlice({
  name: "warehouses",
  initialState,
  reducers: {
    logout: () => {
      return initialState;
    },
    fetchWarehouses: (state, action: PayloadAction<Warehouse[]>) => {
      state.value = action.payload;
    },
    addNewWarehouse: (state, action: PayloadAction<Warehouse>) => {
      state.value.concat(action.payload);
    }
  }
});

export const {
  addNewWarehouse,
  logout,
  fetchWarehouses,
} = warehouseSlice.actions;
export default warehouseSlice.reducer;

/*
{
  id: 0,
    name: "",
  address: "",
  emailAddress: "",
}
*/

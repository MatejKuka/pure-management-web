import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Warehouse} from "@/utils/types/warehouse";

const initialState: {value: Warehouse | null} = {
  value: null
}

export const warehouseSlice = createSlice({
  name: "warehouse",
  initialState,
  reducers: {
    logout: () => {
      return initialState;
    },
    setWarehouse: (state, action: PayloadAction<Warehouse>) => {
      state.value = action.payload;
    }
  }
});

export const {
  logout,
  setWarehouse,
} = warehouseSlice.actions;
export default warehouseSlice.reducer;

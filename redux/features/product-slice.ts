import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Product} from "@/utils/types/Product";

const initialState: {value: Product[]} = {
  value: [] as Product[]
}

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    logout: () => {
      return initialState;
    },
    fetchProducts: (state, action: PayloadAction<Product[]>) => {
      state.value = action.payload;
    },
    addNewProduct: (state, action: PayloadAction<Product>) => {
      state.value.concat(action.payload);
    }
  }
});

export const {
  addNewProduct,
  logout,
  fetchProducts,
} = productSlice.actions;
export default productSlice.reducer;
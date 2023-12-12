import { configureStore } from '@reduxjs/toolkit'
import warehouseReducer from "./features/warehouse-slice";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import productReducer from "@/redux/features/product-slice";

export const store = configureStore({
  reducer: {
    warehouseReducer,
    productReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Product} from "@/utils/types/Product";

export interface IUser {
  id: number;
  name: string;
  role: string;
  emailAddress: string,
  password: string,
  companyId: number,
  company: string
}

const initialState: {value: IUser} = {
  value: {} as IUser
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => {
      return initialState;
    },
    fetchUser: (state, action: PayloadAction<IUser>) => {
      state.value = action.payload;
    },
  }
});

export const {
  logout,
  fetchUser,
} = authSlice.actions;
export default authSlice.reducer;
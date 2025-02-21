import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginBody, User } from "@/types/user";
import { getUserDetails, PostLogin } from "@/api";
import SecureStore, {
  getTokens,
  removeTokens,
  setTokens,
} from "@/utils/secureStore";
import axios, { Axios, AxiosError } from "axios";
import { router } from "expo-router";
import { Theme } from "@/types/global";

type InitialStateType = {
  theme: Theme;
};

const initialState: InitialStateType = {
  theme: SecureStore.getItem("THEME") === "light" ? "light" : "dark",
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    // set user
    setTheme: (state, action: PayloadAction<Theme>) => {
      SecureStore.setItem("THEME", action.payload);
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = globalSlice.actions;

export default globalSlice.reducer;

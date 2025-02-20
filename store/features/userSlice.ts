import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoginBody, User } from "@/types/user";
import { getUserDetails, PostLogin } from "@/api";
import SecureStore, {
  getTokens,
  removeTokens,
  setTokens,
} from "@/utils/secureStore";
import axios, { Axios, AxiosError } from "axios";
import { router } from "expo-router";

type InitialStateType = {
  auth: { access?: string; refresh?: string } | null;
  user: User | null;
};

const initialState: InitialStateType = {
  auth: getTokens(),
  user: null,
};

type authResponse = { access: string };

export const userLogin = createAsyncThunk(
  "/auth/login",
  async (body: LoginBody, thunkApi) => {
    try {
      const response: InitialStateType["auth"] = await PostLogin(body);
      if (response?.access && response.refresh) {
        const access = await setTokens({
          access: response.access,
          refresh: response.refresh,
        });
        return response;
      } else return null;
    } catch (error) {
      const err = error as AxiosError;
      if (err.response?.data) {
        throw thunkApi.rejectWithValue(err.response.data);
      }
      throw thunkApi.rejectWithValue({ message: "Error" });
    }
  }
);

export const userDetails = createAsyncThunk(
  "/user-details",
  async (_, thunkApi) => {
    try {
      const response: User = await getUserDetails();
      return response;
    } catch (error) {
      const err = error as AxiosError;
      if (err.response?.data) {
        throw thunkApi.rejectWithValue(err.response.data);
      }
      throw thunkApi.rejectWithValue({ message: "Error" });
    }
  }
);

// export const getUserPermission = createAsyncThunk(
//   "auth/permission",
//   async (_, thunkApi) => {
//     try {
//       // const response: ApiResponseObject<UserPermissions> = await usersApi.getPermissions(0);
//       // return response.data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error);
//     }
//   }
// );

// export const getAccessToken = createAsyncThunk(
//   "user/accessToken",
//   async (_, thunkApi) => {
//     try {
//       const response: ApiResponseObject<{ accessToken: string }> =
//         await getAccessTokenCrud.get();
//       localStorage.setItem("authentication", response.data.accessToken);
//       return response.data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error);
//     }
//   }
// );
// export const getProfile = createAsyncThunk("user/", async (_, thunkApi) => {
//   try {
//     // const response: ApiResponseObject<User> =
//     const response: User = await login();
//     return response;
//   } catch (error) {
//     return thunkApi.rejectWithValue(error);
//   }
// });

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // set user
    setUser: (state, action) => {
      return { ...state, user: action.payload };
    },
    // log out user
    logoutUser: (state) => {
      removeTokens().then((data) => {
        router.push("/login");
      });
      return { ...state, user: null };
    },
  },
  extraReducers: (builder) => {
    builder
      // .addCase(userLogin.pending, (state) => {
      //   state.status = "loading";
      // })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.auth = action.payload;
        router.push("/");
      })
      // .addCase(userLogin.rejected, (state, action) => {
      //   console.log(action.payload, "ss");
      // });
      .addCase(userDetails.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

export const { setUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;

/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userInstance from "../../api/user.api";

export type UserState = {
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
};

const initialState: UserState = {
  isAuthenticated: !!localStorage.getItem("accessToken"),
  isLoading: false,
  error: null,
};

export type LoginCredentials = {
  username: string;
  password: string;
};

export type RegisterCredentials = {
  username: string;
  firstName: string;
  lastName: string;
  age: number;
  password: string;
  repeatPassword: string;
};

type LoginResponse = {
  username: string;
  accessToken: string;
  refreshToken: string;
};

export const registerUser = createAsyncThunk<
  LoginResponse,
  RegisterCredentials,
  { rejectValue: string }
>(
  "user/register",
  async (credentials: RegisterCredentials, { rejectWithValue }) => {
    try {
      const response = await userInstance.handleRegistration(credentials);
      localStorage.setItem("accessToken", response.data.accessToken);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data.error || "Failed to login");
    }
  },
);

export const loginUser = createAsyncThunk<
  LoginResponse,
  LoginCredentials,
  { rejectValue: string }
>("user/login", async (credentials: LoginCredentials, { rejectWithValue }) => {
  try {
    const response = await userInstance.handleLogin(credentials);
    localStorage.setItem("accessToken", response.data.accessToken);
    return response.data;
  } catch (err: any) {
    return rejectWithValue(err.response?.data.error || "Failed to login");
  }
});

export const checkAuth = createAsyncThunk(
  "user/check",
  async (_, { rejectWithValue }) => {
    try {
      const response = await userInstance.refreshToken();
      localStorage.setItem("accessToken", response.data.accessToken);
      return response.data;
    } catch {
      return rejectWithValue("Auth error");
    }
  },
);

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state) => {
        state.error = null;
        state.isAuthenticated = true;
        state.isLoading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload || "Failed to login";
        state.isLoading = false;
        state.isAuthenticated = false;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.isAuthenticated = false;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.error = action.payload || "Failed to register";
        state.isLoading = false;
        state.isAuthenticated = false;
      })
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.isAuthenticated = false;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.error = null;
        state.isAuthenticated = true;
        state.isLoading = false;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.error = null;
        state.isAuthenticated = false;
        state.isLoading = false;
      })
      .addCase(checkAuth.fulfilled, (state) => {
        state.error = null;
        state.isAuthenticated = true;
        state.isLoading = false;
      })
      .addCase(checkAuth.pending, (state) => {
        state.error = null;
        state.isLoading = true;
        state.isAuthenticated = true;
      });
  },
});

export default userSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

export type UserState = {
  isAuthenticated: boolean;
  error: string | null;
};

const initialState: UserState = {
  isAuthenticated: Boolean(localStorage.getItem('accessToken')),
  error: null,
};

type LoginCredentials = {
  username: string;
  password: string;
};

type LoginResponse = {
  username: string;
  accessToken: string;
  refreshToke: string;
};

export const loginUser = createAsyncThunk<
  LoginResponse,
  LoginCredentials,
  { rejectValue: string }
>("user/login", async (credentials: LoginCredentials, { rejectWithValue }) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_SERVER_URL}/api/v1.0/user/login`,
      credentials,
    );
    localStorage.setItem("accessToken", response.data.accessToken);
    localStorage.setItem("refreshToken", response.data.refreshToken);
    return response.data;
  } catch (err: unknown) {
    if (err instanceof AxiosError) {
      return rejectWithValue(err.response?.data.error);
    }
    return rejectWithValue("Failed to login");
  }
});

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state) => {
        state.error = null;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload || "Failed to login";
      });
  },
});

export default userSlice.reducer;

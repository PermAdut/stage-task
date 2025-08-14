import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { Project } from "../../interfaces/Project.interface";
import axios, { AxiosError } from "axios";

export type ProjectState = {
  isLoading: boolean;
  projects: Project[];
};

const initialState: ProjectState = {
  isLoading: false,
  projects: [],
};

const axiosInstance = axios.create();
axiosInstance.interceptors.request.use(function (config) {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const searchProjects = createAsyncThunk<
  Project[],
  string,
  { rejectValue: string }
>("projects/search", async (searchString: string, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get(
      `${process.env.API_SERVER_URL}/api/v1.0/projects?search=${searchString}`,
    );
    return response.data;
  } catch (err: unknown) {
    console.log(err);
    if (err instanceof AxiosError) {
      return rejectWithValue(err.response?.data.error || "Failed to fetch");
    }
    return rejectWithValue("Iternal Server Error");
  }
});

const projectSlice = createSlice({
  name: "project",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchProjects.fulfilled, (state, action) => {
        state.projects = action.payload;
        state.isLoading = false;
      })
      .addCase(searchProjects.rejected, (state) => {
        state.projects = [];
        state.isLoading = false;
      })
      .addCase(searchProjects.pending, (state) => {
        state.isLoading = true;
      });
  },
});

export default projectSlice.reducer;

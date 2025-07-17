import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { Project } from "../../interfaces/Project.interface";
import axios, { AxiosError } from "axios";

export type ProjectState = {
  projects: Project[];
};

const initialState: ProjectState = {
  projects: [],
};

export const searchProjects = createAsyncThunk<
  Project[],
  string,
  { rejectValue: string }
>("projects/search", async (searchString: string, { rejectWithValue }) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_SERVER_URL}/api/v1.0/projects?search=${searchString}`,
    );
    return response.data;
  } catch (err: unknown) {
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
      })
      .addCase(searchProjects.rejected, (state) => {
        state.projects = [];
      });
  },
});

export default projectSlice.reducer;

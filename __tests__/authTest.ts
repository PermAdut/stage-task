import { configureStore } from "@reduxjs/toolkit";
import axios from "axios";
import { loginUser, type UserState } from "../src/store/slices/userSlice";
import userReducer from '../src/store/slices/userSlice';

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

interface RootState {
  user: UserState;
}

describe("Testing auth", () => {
  let store: ReturnType<typeof configureStore<RootState>>;

  beforeEach(() => {
    store = configureStore<RootState>({
      reducer: {
        user: userReducer,
      },
    });
    jest.resetAllMocks();
  });

  it("Should successful login", async () => {
    mockedAxios.post.mockResolvedValueOnce({
      data: { username: "admin" },
    });

    await store.dispatch(loginUser({ username: "admin", password: "1234" }));
    const state = store.getState().user;

    expect(state.isAuthenticated).toBe(true);
    expect(state.error).toBeNull();
    expect(state.isLoading).toBe(false);
    expect(mockedAxios.post).toHaveBeenCalledWith(
      `${process.env.API_SERVER_URL}/api/v1.0/user/login`,
      { username: "admin", password: "1234" },
      { withCredentials: true}
    );
  });

  it("Login data is no correct", async () => {
    const errorMessage = "Failed to login";
    mockedAxios.post.mockRejectedValueOnce({
      response: { data: { error: errorMessage } },
    });

    await store.dispatch(loginUser({ username: "wrong", password: "1234" }));
    const state = store.getState().user;

    expect(state.isAuthenticated).toBe(false);
    expect(state.error).toBe(errorMessage);
    expect(state.isLoading).toBe(false);
    expect(mockedAxios.post).toHaveBeenCalledWith(
      `${process.env.API_SERVER_URL}/api/v1.0/user/login`,
      { username: "wrong", password: "1234" },
      { withCredentials: true}
    );
  });
});
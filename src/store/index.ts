import { configureStore } from "@reduxjs/toolkit";
// import { navReducer } from "./slices/navbarSlice";
import userReducer from "./slices/userSlice";
export const store = configureStore({
    reducer:{
        // project: projectReducer,
        user: userReducer,
    }
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

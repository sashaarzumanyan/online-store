import { configureStore} from "@reduxjs/toolkit";
import { authApi } from "../services/auth/authApi";
import { typeApi } from "../services/typeAPI";
import configsSlice from "./slice/configsSlice";

export const store = configureStore({
    reducer: {
        configs: configsSlice,
        [typeApi.reducerPath]: typeApi.reducer,
        [authApi.reducerPath]: authApi.reducer
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(typeApi.middleware)
})

console.log(typeApi)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


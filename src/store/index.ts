import { configureStore } from "@reduxjs/toolkit";
import combinedReducers from "./root-reducer";

const store = configureStore({
    reducer: combinedReducers,
    devTools: import.meta.env.DEV
});

export default store;
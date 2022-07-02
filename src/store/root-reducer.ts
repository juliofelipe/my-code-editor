import { combineReducers } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { darkModeReducer } from "./slices/dark-mode/darkMode";
import { persistReducer } from 'redux-persist';
import { filesReducer } from "./slices/files/files";

const persistConfig = {
    key: 'root',
    storage,
  };

const combinedReducers = combineReducers({
    darkMode: darkModeReducer,
    files: filesReducer,
});

const persistedReducer = persistReducer(persistConfig, combinedReducers);

export default persistedReducer;
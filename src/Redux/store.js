import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import authSlice from "./Auth";
import TravelListSlice from "./Travel";
import { userProfileSlice } from "./userHistory";
const combine = combineReducers({
  onAuth: authSlice.reducer,
  Travel: TravelListSlice.reducer,
  UserHistory: userProfileSlice.reducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, combine);

export const store = configureStore({
  reducer: {
    persistedReducer,
  },
});

export let persistor = persistStore(store);

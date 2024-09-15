import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
} from "redux-persist";
import { vehiclesReducer } from "./vehicle/slice";
import { filtersReducer } from "./filters/slice";
import { notificationReducer } from "./notification/slice";

const persistConfig = {
  key: "favorites",
  storage,
  whitelist: ["favorites"],
};

export const store = configureStore({
  reducer: {
    vehicle: persistReducer(persistConfig, vehiclesReducer),
    filters: filtersReducer,
    notify: notificationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
          "notification/notify",
        ],
        ignoredPaths: ["notification.message"],
      },
    }),
});

export const persistor = persistStore(store);

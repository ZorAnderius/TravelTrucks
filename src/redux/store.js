import { configureStore } from "@reduxjs/toolkit";
import { vehiclesReducer } from "./vehicle/slice";

export const store = configureStore({
    reducer: {
        vehicle: vehiclesReducer,
    }
})
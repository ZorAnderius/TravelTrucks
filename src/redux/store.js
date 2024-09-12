import { configureStore } from "@reduxjs/toolkit";
import { vehiclesReducer } from "./vehicle/slice";
import { filtersReducer } from "./filters/slice";

export const store = configureStore({
    reducer: {
        vehicle: vehiclesReducer,
        filters: filtersReducer,
    }
})
import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

const filtersSlice = createSlice({
  name: "filters",
  initialState: initialState,
  reducers: {
    changeFilters(state, action) {
      return (state = action.payload);
    },
    resetFilters() {
      return initialState;
    },
  },
});

export const { changeFilters, resetFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { fetchAllVehicle } from "./operation";
import {
  handleAllVehicle,
  handleFulfilled,
  handlePending,
  handleRejected,
} from "./hendles";
import { FETCH_STATUS } from "../../helpers";

const vehiclesSlice = createSlice({
  name: "vehicle",
  initialState: initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        ({ id }) => id !== action.payload
      );
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchAllVehicle.fulfilled, handleAllVehicle)
      .addMatcher(
        (action) => action.type.endsWith(FETCH_STATUS.pending),
        handlePending
      )
      .addMatcher(
        (action) => action.type.endsWith(FETCH_STATUS.fulfilled),
        handleFulfilled
      )
      .addMatcher(
        (action) => action.type.endsWith(FETCH_STATUS.rejected),
        handleRejected
      ),
});

export const { addFavorite, removeFavorite } = vehiclesSlice.actions;
export const vehiclesReducer = vehiclesSlice.reducer;

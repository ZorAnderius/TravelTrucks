import { createSelector } from "@reduxjs/toolkit";
import { selectFilters } from "../filters/selector";

export const selectVehicles = (state) => state.vehicle.items;

export const selectFavorites = (state) => state.vehicle.favorites;

export const selectLoader = (state) => state.vehicle.isLoading;

export const selectError = (state) => state.vehicle.error;

export const selectFilteredVehicles = createSelector(
  [selectVehicles, selectFilters],
  (vehicles, filters) => {
    if (!vehicles || vehicles.length === 0) return [];

    return vehicles.filter((vehicle) => {
      const locationFilter = filters.location
        ? vehicle.location
            ?.toLowerCase()
            .includes(filters.location.toLowerCase())
        : true;

      const equipment = {
        AC: filters.AC,
        TV: filters.TV,
        bathroom: filters.bathroom,
        kitchen: filters.kitchen,
      };

      const equipmentFilter = Object.keys(equipment).every((key) => {
        return !equipment[key] || vehicle[key] === equipment[key];
      });
      const transmissionFilter = filters.automatic
        ? vehicle.transmission?.toLowerCase().includes("automatic")
        : true;

      const typeFilter = filters.type
        ? vehicle.form.toLowerCase().includes(filters.type.toLowerCase())
        : true;

      return (
        locationFilter && equipmentFilter && transmissionFilter && typeFilter
      );
    });
  }
);

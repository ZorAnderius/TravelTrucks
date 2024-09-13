export const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

export const handleFulfilled = (state) => {
  state.isLoading = false;
  state.error = null;
};

export const handleVehicleById = (state, action) => {
  state.currentVehicle = action.payload;
  state.items = [];
};

export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  state.currentVehicle = {};
};

export const handleAllVehicle = (state, action) => {
  state.items = action.payload;
  state.currentVehicle = {};
};

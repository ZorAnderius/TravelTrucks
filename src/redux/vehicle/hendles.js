export const handlePending = (state) => {
    state.isLoading = true;
}

export const handleFulfilled = (state) => { 
    state.isLoading = false;
 }

export const handleRejected= (state, action) => { 
    state.isLoading = false;
    state.error = action.payload;
 }

export const handleAllVehicle = (state, action) => {
    state.items = action.payload;
};
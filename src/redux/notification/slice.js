import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const notificationSlice = createSlice({
  name: 'notification',
  initialState: initialState,
  reducers: {
    notify: (state, action) => {
      state.notification = { ...action.payload };
    },
  },
});

export const { notify } = notificationSlice.actions;
export const notificationReducer = notificationSlice.reducer;

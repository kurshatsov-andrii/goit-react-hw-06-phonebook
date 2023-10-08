import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter: (_, action) => {
      return action.payload; // це буде значення фільтра (пошукового запиту)
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface darkModeState<T> {
  darkMode: boolean;
}

const initialState: darkModeState<unknown> = {
  darkMode: false,
};

export const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    changeDarkMode: (state, action) => {
      state.darkMode = action.payload;
    },
  },
});

export const { changeDarkMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;

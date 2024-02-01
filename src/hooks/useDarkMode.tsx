import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeDarkMode } from '../redux/modules/darkMode/DarkModeSlice';
import { darkModeSlice } from '../redux/modules/darkMode/DarkModeSlice';

interface darkModeState {
  darkMode: boolean;
}
export const useDarkMode = () => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector(
    (state: { darkModeSlice: darkModeState }) => state.darkModeSlice,
  );

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark-mode');
    dispatch(changeDarkMode(!darkMode));
  };

  return { toggleDarkMode };
};

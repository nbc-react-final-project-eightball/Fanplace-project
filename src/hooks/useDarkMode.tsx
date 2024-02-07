import React, { useEffect } from 'react';
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

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode');
    if (isDarkMode) {
      document.documentElement.classList.toggle(
        'dark-mode',
        JSON.parse(isDarkMode),
      );
      dispatch(changeDarkMode(JSON.parse(isDarkMode)));
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    document.documentElement.classList.toggle('dark-mode', newDarkMode);
    dispatch(changeDarkMode(newDarkMode));
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
  };

  return { toggleDarkMode };
};

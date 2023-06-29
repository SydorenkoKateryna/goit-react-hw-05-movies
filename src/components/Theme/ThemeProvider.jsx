import { useState, useEffect, createContext, useContext } from 'react';
import { light, dark } from './Theme.styled';
import { ThemeProvider } from 'styled-components';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const Theme = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return JSON.parse(window.localStorage.getItem('theme')) ?? light;
  });

  const setThemeLight = () => {
    setTheme(light);
  };

  const setThemeDark = () => {
    setTheme(dark);
  };

  useEffect(() => {
    window.localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setThemeLight, setThemeDark }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

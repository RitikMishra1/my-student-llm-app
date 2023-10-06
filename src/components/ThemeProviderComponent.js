import React, { useState, createContext } from 'react';
import { lightTheme, darkTheme } from './Themes';  // Import themes
import { ThemeProvider } from 'styled-components';

export const ThemeContext = createContext();  // Added export here

const ThemeProviderComponent = ({ children }) => {  const [theme, setTheme] = useState(lightTheme);
  const [layout, setLayout] = useState('light');

  
  const toggleTheme = () => {
    if (layout === 'light') {
      setTheme(darkTheme);
      setLayout('dark');
    } else {
      setTheme(lightTheme);
      setLayout('light');
    }
  };
  

  const handleSunClick = () => {
    setTheme(lightTheme);
    setLayout('light');  // Update layout state
  };

  const handleMoonClick = () => {
    setTheme(darkTheme);
    setLayout('dark');  // Update layout state
  };

  return (
<ThemeContext.Provider value={{ theme, toggleTheme, layout, handleSunClick, handleMoonClick }}>
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
</ThemeContext.Provider>


);

  
};

export default ThemeProviderComponent;

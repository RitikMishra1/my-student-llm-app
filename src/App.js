// App.js
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { GlobalStyle, lightTheme, darkTheme } from './components/StyledComponents';

import React from 'react';
import './App.css';
import MainComponent from './components/MainComponent'; // Import MainComponent instead

function App() {
  const [theme, setTheme] = useState(lightTheme); // Initialize with light theme

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div className="App">
        <MainComponent />
      </div>
    </ThemeProvider>
  );
}

export default App;

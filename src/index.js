import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components'; // Import ThemeProvider
import { lightTheme, darkTheme } from './components/Themes'; // Corrected path

const currentTheme = 'light'; // Set the default theme here (either 'light' or 'dark')

ReactDOM.render(
  <React.StrictMode>
    {/* Wrap your entire application with the ThemeProvider */}
    <ThemeProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to measure performance, keep this. Else, you can remove it.
reportWebVitals();

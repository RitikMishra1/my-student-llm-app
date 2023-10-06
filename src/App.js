import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalStyle } from './components/StyledComponents';
import MainComponent from './components/MainComponent';
import ThemeProviderComponent from './components/ThemeProviderComponent';

function App() {
  return (
    <ThemeProviderComponent>
      <GlobalStyle />
      <div className="App">
        <MainComponent />
      </div>
    </ThemeProviderComponent>
  );
}

export default App;

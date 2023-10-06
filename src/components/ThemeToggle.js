import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProviderComponent';
import { ToggleContainer, IconWrapper, SunIcon, MoonIcon } from './StyledComponents';

const ThemeToggle = () => {
  const { handleSunClick, handleMoonClick } = useContext(ThemeContext);

  return (
    <ToggleContainer>
      <IconWrapper onClick={handleSunClick}>
        <SunIcon />
      </IconWrapper>
      <IconWrapper onClick={handleMoonClick}>
        <MoonIcon />
      </IconWrapper>
    </ToggleContainer>
  );
};


export default ThemeToggle;

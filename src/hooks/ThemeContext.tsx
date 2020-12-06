import React, { createContext, FC, useContext, useState } from 'react';

import { ThemeProvider } from 'styled-components';

import { Wrapper } from '../styles';

interface IMyThemeContext {
  toggle(): void;
}

const ThemeToggleContext = createContext({} as IMyThemeContext);

export const MyThemeProvider: FC = ({ children }) => {
  const [themeState, setThemeState] = useState({
    mode: 'light',
  });

  const toggle = () => {
    const mode = themeState.mode === 'light' ? `dark` : `light`;
    setThemeState({ mode });
  };

  return (
    <ThemeToggleContext.Provider value={{ toggle }}>
      <ThemeProvider
        theme={{
          mode: themeState.mode,
        }}
      >
        <Wrapper>{children}</Wrapper>
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};

export const useTheme = (): IMyThemeContext => {
  return useContext(ThemeToggleContext);
};

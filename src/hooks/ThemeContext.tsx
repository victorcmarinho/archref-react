import React, {
  createContext,
  FC,
  useCallback,
  useContext,
  useState,
} from 'react';

import { ThemeProvider } from 'styled-components';
import { Wrapper } from 'styles';

interface IThemeState {
  mode: 'dark' | 'light';
}
interface IMyThemeContext {
  toggle(): void;
  themeState: IThemeState;
}

const ThemeToggleContext = createContext({} as IMyThemeContext);

export const MyThemeProvider: FC = ({ children }) => {
  const [themeState, setThemeState] = useState<IThemeState>({
    mode: 'light',
  });

  const toggle = useCallback(() => {
    const mode = themeState.mode === 'light' ? `dark` : `light`;
    setThemeState({ mode });
  }, [setThemeState, themeState]);

  return (
    <ThemeToggleContext.Provider value={{ toggle, themeState }}>
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

import { BrowserRouter } from 'react-router-dom';
import { SplashProvider } from '../src/hooks/LoadingContext';
import { MyThemeProvider } from '../src/hooks/ThemeContext';
import GlobalStyles from '../src/styles/global';


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  (Story) => (
    <>
      <MyThemeProvider>
        <SplashProvider SplashScreen={() => <></>} initSplash={false}>
          <BrowserRouter>
            <Story />
          </BrowserRouter>
        </SplashProvider>
      </MyThemeProvider>
      <GlobalStyles />
    </>
  ),
];
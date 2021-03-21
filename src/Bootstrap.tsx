import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Loading from 'components/Loading/Loading';
import { SplashProvider } from 'hooks/LoadingContext';
import { MyThemeProvider } from 'hooks/ThemeContext';
import Routes from 'routers';
import GlobalStyles from 'styles/global';
const Bootstrap: React.FC = () => {
  return (
    <>
      <MyThemeProvider>
        <SplashProvider SplashScreen={Loading}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </SplashProvider>
      </MyThemeProvider>
      <GlobalStyles />
    </>
  );
};

export default Bootstrap;

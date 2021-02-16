import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from 'react';

interface ISplashContext {
  isSplashScreenShowing: boolean;
  setSplashScreenShowing: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ISplashProvider {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  SplashScreen: FC<any>;
  initSplash?: boolean;
}

const SplashContext = createContext({} as ISplashContext);

export const DEFAULT_LOADING_WAIT_TIME = 500;

export const SplashProvider: FC<ISplashProvider> = ({
  SplashScreen,
  children,
  initSplash = true,
}) => {
  const [isSplashScreenShowing, setSplashScreenShowing] = useState(initSplash);

  useEffect(() => {
    const timer = setTimeout(
      () => setSplashScreenShowing(false),
      DEFAULT_LOADING_WAIT_TIME,
    );
    return () => clearTimeout(timer);
  }, []);

  return (
    <SplashContext.Provider
      value={{ isSplashScreenShowing, setSplashScreenShowing }}
    >
      {isSplashScreenShowing && <SplashScreen />}
      {children}
    </SplashContext.Provider>
  );
};

export const useSplashScreen = (): ISplashContext => {
  return useContext(SplashContext);
};

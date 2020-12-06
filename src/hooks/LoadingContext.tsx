import React, {
  createContext,
  FC,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

interface ISplashContext {
  isSplashScreenShowing: boolean;
  addLoading(): number;
  removeLoading(id?: number): void;
}

interface ISplashProvider {
  SplashScreen: FC;
}

const SplashContext = createContext({} as ISplashContext);

export const DEFAULT_LOADING_WAIT_TIME = 500;

export const SplashProvider: FC<ISplashProvider> = ({
  SplashScreen,
  children,
}) => {
  const [isSplashScreenShowing, setSplashScreenShowing] = useState(true);
  const [stopLoadingTimeoutId, setStopLoadingTimeoutId] = useState<number>();
  const [loadings, setLoadings] = useState<number[]>([]);

  useEffect(() => {
    if (loadings.length > 0) {
      clearTimeout(stopLoadingTimeoutId);
      setSplashScreenShowing(true);
      return;
    }
    setStopLoadingTimeoutId(
      setTimeout(() => {
        setSplashScreenShowing(false);
      }, DEFAULT_LOADING_WAIT_TIME),
    );
  }, [
    isSplashScreenShowing,
    loadings,
    setSplashScreenShowing,
    setStopLoadingTimeoutId,
    clearTimeout,
    setTimeout,
    DEFAULT_LOADING_WAIT_TIME,
  ]);

  const addLoading = useCallback(() => {
    const id = Math.random();
    setLoadings(loadings => [...loadings, id]);
    return id;
  }, []);

  const removeLoading = useCallback((removeId?: number) => {
    if (removeId !== undefined)
      setLoadings(loadings => loadings.filter(id => id !== removeId));
    else
      setLoadings(loadings =>
        loadings.filter(id => id !== loadings[loadings.length - 1]),
      );
  }, []);

  return (
    <SplashContext.Provider
      value={{ isSplashScreenShowing, addLoading, removeLoading }}
    >
      {isSplashScreenShowing && <SplashScreen />}
      {children}
    </SplashContext.Provider>
  );
};

export const useSplashScreen = (): ISplashContext => {
  return useContext(SplashContext);
};

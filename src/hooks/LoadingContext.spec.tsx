import React, { FC } from 'react';

import { renderHook, act } from '@testing-library/react-hooks';
import Loading from 'components/Loading/Loading';

import { useSplashScreen, SplashProvider } from './LoadingContext';

describe('LoadingContext Hook', () => {
  const wrapper: FC = ({ children }) => (
    <SplashProvider SplashScreen={Loading}>{children}</SplashProvider>
  );

  const wrapper2: FC = ({ children }) => (
    <SplashProvider SplashScreen={Loading} initSplash={false}>
      {children}
    </SplashProvider>
  );
  it('should be init hook', async () => {
    const { result } = renderHook(() => useSplashScreen(), {
      wrapper,
    });

    expect(result.current).toBeTruthy();
    expect(result.error).toBeFalsy();

    const { result: result2 } = renderHook(() => useSplashScreen(), {
      wrapper: wrapper2,
    });

    expect(result2.current).toBeTruthy();
    expect(result2.error).toBeFalsy();
  });

  it('should be unmounted hook', async () => {
    const { result, unmount } = renderHook(() => useSplashScreen(), {
      wrapper,
    });
    unmount();
    expect(result.current).toBeTruthy();
    expect(result.error).toBeFalsy();
  });

  it('should be able remove loading', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useSplashScreen(), {
      wrapper,
    });

    act(() => {
      result.current.setSplashScreenShowing(true);
      expect(result.current.isSplashScreenShowing).toBeTruthy();
    });

    await waitForNextUpdate();
    expect(result.current.isSplashScreenShowing).toBeFalsy();
  });
});

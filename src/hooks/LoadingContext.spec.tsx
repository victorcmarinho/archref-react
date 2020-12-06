import React, { FC } from 'react';

import { renderHook, act } from '@testing-library/react-hooks';

import Loading from '~/components/Loading/Loading';

import { useSplashScreen, SplashProvider } from './LoadingContext';

describe('LoadingContext Hook', () => {
  const wrapper: FC = ({ children }) => (
    <SplashProvider SplashScreen={Loading}>{children}</SplashProvider>
  );
  it('should be init hook', async () => {
    const { result } = renderHook(() => useSplashScreen(), {
      wrapper,
    });

    expect(result.current).toBeTruthy();
    expect(result.error).toBeFalsy();
  });

  it('should be unmounted hook', async () => {
    const { result, unmount } = renderHook(() => useSplashScreen(), {
      wrapper,
    });
    unmount();
    expect(result.current).toBeTruthy();
    expect(result.error).toBeFalsy();
  });

  it('should be able add loading', async () => {
    const { result, waitFor } = renderHook(() => useSplashScreen(), {
      wrapper,
    });

    const addLoading = jest.spyOn(result.current, 'addLoading');

    act(() => {
      waitFor(() => {
        result.current.addLoading();
      });
    });

    expect(addLoading).toBeCalled();
    expect(result.current.isSplashScreenShowing).toBeTruthy();
  });

  it('should be able remove loading', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useSplashScreen(), {
      wrapper,
    });

    act(() => {
      result.current.addLoading();
      result.current.removeLoading();
      expect(result.current.isSplashScreenShowing).toBeTruthy();
      const id = result.current.addLoading();
      result.current.removeLoading(id);
    });

    await waitForNextUpdate();
    expect(result.current.isSplashScreenShowing).toBeFalsy();
  });
});

import { renderHook, act } from '@testing-library/react-hooks';

import { useTheme, MyThemeProvider } from './ThemeContext';

describe('ThemeContext Hook', () => {
  it('should be init hook', async () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: MyThemeProvider,
    });

    expect(result.current).toBeTruthy();
    expect(result.error).toBeFalsy();
  });

  it('should be able toggle theme', async () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: MyThemeProvider,
    });
    const toogleFunction = jest.spyOn(result.current, 'toggle');

    act(() => {
      result.current.toggle();
    });

    act(() => {
      result.current.toggle();
    });

    expect(toogleFunction).toBeCalled();
  });
});

import React from 'react';
import { act } from 'react-dom/test-utils';

import { fireEvent, render } from '@testing-library/react';
import * as ThemeContext from 'hooks/ThemeContext';

import Home from './Home';

describe('<Home/>', () => {
  const toggle = jest.fn();
  beforeEach(() => {
    jest.spyOn(ThemeContext, 'useTheme').mockReturnValue({
      toggle,
      themeState: { mode: 'light' },
    });
  });

  it('should render', () => {
    const component = render(<Home />);
    expect(component).toBeTruthy();
  });

  it('should click toggle button', () => {
    jest.spyOn(ThemeContext, 'useTheme').mockReturnValue({
      toggle,
      themeState: { mode: 'dark' },
    });
    const { getByTestId } = render(<Home />);
    const button = getByTestId('input');
    act(() => {
      fireEvent.click(button);
    });
    expect(toggle).toHaveBeenCalled();
  });
});

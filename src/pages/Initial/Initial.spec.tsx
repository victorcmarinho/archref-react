import React from 'react';
import { act } from 'react-dom/test-utils';

import { fireEvent, render } from '@testing-library/react';

import * as ThemeContext from '~/hooks/ThemeContext';

import Initial from './Initial';

describe('<Initial/>', () => {
  const toggle = jest.fn();
  beforeEach(() => {
    jest.spyOn(ThemeContext, 'useTheme').mockReturnValue({
      toggle,
      themeState: { mode: 'light' },
    });
  });

  it('should render', () => {
    const component = render(<Initial />);
    expect(component).toBeTruthy();
  });

  it('should click toggle button', () => {
    jest.spyOn(ThemeContext, 'useTheme').mockReturnValue({
      toggle,
      themeState: { mode: 'dark' },
    });
    const { getByLabelText } = render(<Initial />);
    const button = getByLabelText('DarkMode');
    act(() => {
      fireEvent.click(button);
    });
    expect(toggle).toHaveBeenCalled();
  });
});

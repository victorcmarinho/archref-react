import React from 'react';
import { act } from 'react-dom/test-utils';

import { fireEvent, render } from '@testing-library/react';

import * as ThemeContext from '~/hooks/ThemeContext';

import ToggleTheme from './index';

describe('<ToggleTheme/>', () => {
  const toggle = jest.fn();
  beforeEach(() => {
    jest.spyOn(ThemeContext, 'useTheme').mockReturnValue({
      toggle,
    });
  });

  it('should render', () => {
    const component = render(<ToggleTheme />);
    expect(component).toBeTruthy();
  });

  it('should click toggle button', () => {
    const { getByTestId } = render(<ToggleTheme />);
    const button = getByTestId('toggleButton');
    act(() => {
      fireEvent.click(button);
    });
    expect(toggle).toHaveBeenCalled();
  });
});

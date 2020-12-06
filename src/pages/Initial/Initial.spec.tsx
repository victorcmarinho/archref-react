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
    });
  });

  it('should render', () => {
    const component = render(<Initial />);
    expect(component).toBeTruthy();
  });

  it('should click toggle button', () => {
    const { getByTestId } = render(<Initial />);
    const button = getByTestId('toggleButton');
    act(() => {
      fireEvent.click(button);
    });
    expect(toggle).toHaveBeenCalled();
  });
});

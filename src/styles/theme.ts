import { lighten } from 'polished';
import styled from 'styled-components';
import theme from 'styled-theming';

export const backgroundColor = theme('mode', {
  light: '#fafafa',
  dark: '#222',
});

export const textColorPrimary = theme('mode', {
  light: '#050505',
  dark: '#fff',
});

export const textColorSecundary = theme('mode', {
  light: '#fff',
  dark: '#050505',
});

export const buttonBackgroundColor = theme('mode', {
  light: lighten(0.2, '#5B3E96'),
  dark: '#5B3E96',
});

export const buttonTextColor = theme('mode', {
  light: '#eee',
  dark: '#eee',
});

export const Wrapper = styled.div`
  background-color: ${backgroundColor};
  color: ${textColorPrimary};
`;

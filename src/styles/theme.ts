import styled from 'styled-components';
import theme from 'styled-theming';

export const backgroundColor = theme('mode', {
  light: '#fafafa',
  dark: '#222',
});

export const textColor = theme('mode', {
  light: '#000',
  dark: '#fff',
});

export const buttonBackgroundColor = theme('mode', {
  light: '#222',
  dark: '#eee',
});

export const buttonTextColor = theme('mode', {
  light: '#eee',
  dark: '#222',
});

export const Wrapper = styled.div`
  background-color: ${backgroundColor};
  color: ${textColor};
`;

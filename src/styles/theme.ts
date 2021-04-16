import { lighten } from 'polished';
import theme from 'styled-theming';

const backgroundColor = theme('mode', {
  light: '#fafafa',
  dark: '#222',
});

const textColorPrimary = theme('mode', {
  light: '#050505',
  dark: '#fff',
});

const textColorSecundary = theme('mode', {
  light: '#fff',
  dark: '#050505',
});

const buttonBackgroundColor = theme('mode', {
  light: lighten(0.2, '#5B3E96'),
  dark: '#5B3E96',
});

const buttonTextColor = theme('mode', {
  light: '#eee',
  dark: '#eee',
});

export default {
  backgroundColor,
  textColorPrimary,
  textColorSecundary,
  buttonBackgroundColor,
  buttonTextColor,
  fontSize: {
    large: '5.4rem',
    medium: '2.5rem',
    small: '1.5rem',
  },
} as const;

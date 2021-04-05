import styled from 'styled-components';
import theme from 'styles/theme';

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: ${theme.fontSize.large};
    color: ${theme.textColorPrimary};
    margin-top: 4rem;
  }
  p {
    margin-top: 24px;
    font-size: ${theme.fontSize.medium};
    line-height: 32px;
  }
`;

export const Header = styled.header`
  input {
    margin-right: 10px;
  }

  text-transform: capitalize;
  font-size: ${theme.fontSize.small};
`;

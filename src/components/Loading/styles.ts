import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  place-items: center;
  place-self: center;
  position: absolute;
  z-index: 1000000;
  margin: auto;
  height: 100vh;
  width: 100vw;
  background: white;
  div {
    width: 100%;
    height: 100%;
  }
`;

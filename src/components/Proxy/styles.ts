import styled from 'styled-components';

export const GitList = styled.div`
  margin-top: 15px;
  display: grid;
  width: 100%;
  column-gap: 15px;
  row-gap: 15px;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  img {
    height: 80px;
    width: 80px;
    border-radius: 100%;
  }
`;

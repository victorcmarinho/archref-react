import styled from 'styled-components';

export const GitList = styled.div`
  margin-top: 15px;
  display: grid;
  width: 100%;
  column-gap: 15px;
  row-gap: 15px;
  grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
  img {
    height: 8rem;
    width: 8rem;
    border-radius: 100%;
  }
`;

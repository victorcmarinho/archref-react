import { gql } from '@apollo/client';

export const GET_QUERY_EXAMPLE = gql`
  query Query {
    user {
      avatarUrl
      bio
      email
      name
  }
`;

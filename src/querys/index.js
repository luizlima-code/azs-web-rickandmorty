import { gql } from '@apollo/client';

export const INFO_PERSON = gql`
  query {
    characters {
      results {
        name
        species
        gender
        image
      }
    }
  }
`;

export const INFO_EP = gql`
  query epi($id: ID!) {
    episode(id: $id) {
      name
      air_date
      episode
      characters {
        name
        status
        species
        image
      }
    }
  }
`;

export const INFO_LIST_EPS = gql`
  query {
    episodes {
      info {
        count
      }
      results {
        id
        episode
        name
        air_date
        characters {
          name
          species
          image
          status
        }
      }
    }
  }
`;

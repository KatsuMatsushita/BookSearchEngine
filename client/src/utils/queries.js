import { gql } from '@apollo/client';

// there's only 1 query, the me query. 
// written following the example from class
export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        image
        description
        title
        link
      }
    }
  }
`;
import { gql } from '@apollo/client';


export const QUERY_USER = gql`
query user($username: String!) {
    user(username: $username) {
      _id
      savedBooks {
        _id
        description
        bookId
        image
        link
        title
      }
    }
  }
`

export const GET_ME = gql`
query me {
    me {
      _id
      email
      password
      savedBooks {
        _id
        authors {
          name
        }
        bookId
        description
        image
        link
        title
      }
      username
    }
  }
`

export const QUERY_PROFILE = gql`
query myUser($id: ID) {
  myUser(_id: $id) {
    _id
    email
    savedBooks {
      _id
      description
      bookId
      image
      link
      title
    }
    password
    username
  }
}
`
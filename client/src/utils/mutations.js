import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_BOOK = gql `
mutation saveBook($authors: String, $description: String, $title: String, $image: String, $link: String, $bookId: String) {
  saveBook(authors: $authors, description: $description, title: $title, image: $image, link: $link, bookId: $bookId) {
    _id
  }
}
`

export const DELETE_BOOK =gql `
mutation removeBook($bookId: String!) {
  removeBook(bookId: $bookId) {
    _id
    savedBooks {
      bookId
      _id
      description
      image
      link
      title
    }
  }
}
`


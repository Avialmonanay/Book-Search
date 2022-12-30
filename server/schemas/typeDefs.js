const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]
  }

  type Book {
    _id: ID
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }

  type Author{
    name:String
  }
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    books: [Book]
    me: User
    myUser(_id: ID): User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(authors: String, description: String, title: String, image: String, link: String bookId: String):User
    removeBook(bookId: String!):User
  }
`;

module.exports = typeDefs;

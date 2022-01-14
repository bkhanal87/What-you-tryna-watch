const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String
    savedBooks: [Book]
  }

  type Comment {
    _id: ID!
    description: String
    movieId: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    getUser: User
    
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookData: BookInput!): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;



// input AddComment {
//   _id: ID
//   movieId: ID!
//   description: String!
// }

// addComment(comment: AddComment!): User
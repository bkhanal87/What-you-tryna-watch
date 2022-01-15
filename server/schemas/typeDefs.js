const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String
  }
  type Comment {
    _id: ID!
    commentBody: String
    movieId: String!
  }
  input AddComment {
    movieId: String!
    commentBody: String!
    userId: String!
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    getUser: User
    getMovieComments(movieId: String!): [Comment]
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addComment(comment: AddComment!): Comment
  }
`;

module.exports = typeDefs;
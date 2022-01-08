const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type User {
    id: ID!
    username: String!
    email: String!
    comments: [Comments!]
  }

  type Comments {
    id: ID!
    comment_body: String!
    movie_id: Int!
    user: User!
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    getUser(id: ID!): User
    getAllUsers: [User!]
    getComments(id: ID!): Comments
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addComment(comment_body: String!, movie_id: Int!, user: User!): Comments
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;

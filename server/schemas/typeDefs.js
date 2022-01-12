const {gql} = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String!
        email: String!
        comments: [Comment]!
    }
    
    type Comment {
        _id: ID
        movieId: ID!
        description: String!
        user: User!
    }

    type Query {
        getUser: User
        getComment: User
    }
    
    type Auth {
        token: ID!
        user: User
    }
    
    type Mutation {
        loginUser(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
    }`


module.exports = typeDefs;


// input AddComment {
//   _id: ID
//   movieId: ID!
//   description: String!
// }

// addComment(comment: AddComment!): User
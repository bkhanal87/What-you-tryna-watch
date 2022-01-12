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

    input AddComment {
        _id: ID
        movieId: ID!
        description: String!
    }
    
    type Mutation {
        loginUser(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addComment(comment: AddComment!): User
    }`


module.exports = typeDefs;
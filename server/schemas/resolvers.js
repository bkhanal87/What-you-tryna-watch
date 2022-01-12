const { AuthenticationError } = require('apollo-server-express');
const { User, Comment } = require('../models')
const { signToken } = require('../utils/auth')

const resolvers = {
    Query: {
        getUser: async (parent, args, context, info) => {
            const { username } = context.user;
            return User.findOne({ username }).populate('comments')
        }
    },

    Mutation: {

        addUser: async (parent, {username, email, password }) => {
            const user = await User.create({ username, email, password })
            const token = signToken(user);
            return { token, user }
        },

        loginUser: async (parent, {email, password}) => {
            const user = await User.findOne({email});

            if (!user) {
                throw new AuthenticationError('No user found with this email')
            }

            const correctPassword = await user.isCorrectPassword(password);

            if(!correctPassword){
                throw new AuthenticationError('Invalid Credentials')
            }

            const token = signToken(user);

            return { token, user}
        },

        addComment: async (parent, {comment}, context) => {
            const username = context.user.username;
            return User.findOneAndUpdate(
                {username},
                {$addToSet: { comments: comment}},
                {new: true}
            )
        },
    }
}

module.exports = resolvers;

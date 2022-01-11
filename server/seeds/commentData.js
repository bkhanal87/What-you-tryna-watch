const { Comment } = require('../models');

const commentData = [
    {
        comment_body: "Hello your test was successful!",
        movie_id: "tt0172495",
        user_id: 1,
    }
]

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;
const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
  commentBody: {
    type: String,
    required: true,
  },
  // saved movie id from API
  movieId: {
    type: String,
    required: true,
  },
  
  // user : { type: Schema.Types.ObjectId, ref: 'User' },
});

const Comment = model('Comment', commentSchema);

module.exports = Comment;

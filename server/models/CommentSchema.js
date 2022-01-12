const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  // saved movie id from API
  movieId: {
    type: String,
    required: true,
  },
  // saved movie id from API
  user : { type: Schema.Types.ObjectId, ref: 'User' },
});

const Comment = model('Comment', commentSchema);

module.exports = commentSchema;

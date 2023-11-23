const mongoose = require('mongoose');
const commentSchema = new mongoose.Schema({
   vocab_looked_up: Number,
   vocab_marked:String
});
const Comment = mongoose.model('comment', commentSchema);
module.exports = Comment;
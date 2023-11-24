const mongoose = require('mongoose');
const commentSchema = new mongoose.Schema({
   user_id: mongoose.Types.ObjectId,
   vocab_id: mongoose.Types.ObjectId,
   comment_detail: String
});
const Comment = mongoose.model('comment', commentSchema);
module.exports = Comment;
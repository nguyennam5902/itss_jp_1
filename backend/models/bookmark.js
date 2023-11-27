const mongoose = require('mongoose');
const bookmarkSchema = new mongoose.Schema({
   user_id: mongoose.Types.ObjectId,
   vocab_marked: [mongoose.Types.ObjectId]
});
const Bookmark = mongoose.model('bookmark', bookmarkSchema);
module.exports = Bookmark;
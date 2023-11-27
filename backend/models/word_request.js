const mongoose = require('mongoose');
const wordRequestSchema = new mongoose.Schema({
   hiragana: String,
   katakana: String,
   kanji: String,
   romaji: String,
   synonym_id: [mongoose.Types.ObjectId],
   antonym_id: [mongoose.Types.ObjectId],
   topic_id: mongoose.Types.ObjectId,
   type: String,
   meaning: String,
   example: String,
   example_meaning: String
});
const WordRequest = mongoose.model("word_request", wordRequestSchema);
module.exports = WordRequest;
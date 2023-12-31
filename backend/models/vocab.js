const mongoose = require('mongoose');

const vocabSchema = new mongoose.Schema({
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
    example_meaning: String,
    comments: [{
        user_id: String, // ID của người dùng
        comment_text: String,
        is_accept: Boolean,
        created_at: {
            type: Date,
            default: Date.now
        }
    }]
});

const Vocab = mongoose.model('Vocab', vocabSchema);

module.exports = Vocab;

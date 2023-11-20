const mongoose = require('mongoose');

const vocabSchema = new mongoose.Schema({
    hiragana: String,
    kanji: String,
    romaji: String,
    synonym_id: [Number],
    antonym_id: [Number],
    topic_id: Number,
    meaning: String,
    example: String,
    example_meaning: String,
    comments: [{
        user_id: String, // ID của người dùng
        comment_text: String,
        created_at: {
            type: Date,
            default: Date.now
        }
    }]
});

const Vocab = mongoose.model('Vocab', vocabSchema);

module.exports = Vocab;

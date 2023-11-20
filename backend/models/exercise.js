const mongoose = require('mongoose');
const exerciseSchema = new mongoose.Schema({
   user_id: mongoose.mongo.ObjectId,
   vocab_learnt: String
});
const Exercise = mongoose.model('exercise', exerciseSchema);
module.exports = Exercise;
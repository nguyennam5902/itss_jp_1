const mongoose = require('mongoose');
const testSchema = new mongoose.Schema({
   user_id: mongoose.Types.ObjectId,
   topic_id: mongoose.Types.ObjectId,
   time: Date,
   score: Number
});
const Test = mongoose.model('test', testSchema);
module.exports = Test;
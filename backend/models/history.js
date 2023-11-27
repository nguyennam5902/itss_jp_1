const mongoose = require('mongoose');
const historySchema = new mongoose.Schema({
   user_id: mongoose.Types.ObjectId,
   vocab_looked_up: mongoose.Types.ObjectId,
   vocab_marked: mongoose.Types.ObjectId
});
const History = mongoose.model('history', historySchema);
module.exports = History;
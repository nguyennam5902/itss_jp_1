const mongoose = require('mongoose');
const historySchema = new mongoose.Schema({
   vocab_looked_up: Number,
   vocab_marked:String
});
const History = mongoose.model('history', historySchema);
module.exports = History;
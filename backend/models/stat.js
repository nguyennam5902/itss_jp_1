const mongoose = require('mongoose');
const statSchema = new mongoose.Schema({
   user_id: mongoose.mongo.ObjectId,
   vocab_learnt_per_day:Number,
   vocab_looked_up_per_day:Number
});
const Stat = mongoose.model('stat', statSchema);
module.exports = Stat;
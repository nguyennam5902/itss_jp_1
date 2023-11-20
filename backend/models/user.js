/**
 * TODO: Database needed
 */
const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
   username: String,
   password: String,
   full_name: String,
   birthday: Date,
   job: String,
   create_time: Date
});
module.exports = mongoose.model("user_infor", userSchema);
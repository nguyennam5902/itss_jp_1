const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
   username: String,
   password: String,
   full_name: String,
   birthday: Date,
   job: String,
   create_time: Date,
   email:String
});
module.exports = mongoose.model("user_infor", userSchema);
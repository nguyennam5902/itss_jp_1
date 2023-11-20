const mongoose = require('mongoose');
const topicSchema = new mongoose.Schema({
   topic_name: String
});
const Topic = mongoose.model('topic', topicSchema);
module.exports = Topic;
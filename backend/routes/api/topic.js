const Topic = require('../../models/topic');
const Vocab = require('../../models/vocab');
/**
 * Find all words start with `anotherWord`
 * @param {String} searchWord 
 * @returns 
 */
const topic = async function (searchWord) {
   const regex = new RegExp(searchWord, 'i');
   const topics = await Topic.find({ topic_name: regex }).limit(10).exec();
   return topics;
}
const detail = async (topicID) => {
   const words = await Vocab.find({ topic_id: topicID }).exec();
   return words;
}
module.exports = { topic, detail };
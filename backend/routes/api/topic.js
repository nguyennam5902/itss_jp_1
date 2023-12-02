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
   // console.log(topics);
   // const result = [];
   // for (let i = 0; i < topics.length; i++) {
   //    result.push(topics[i]._id.toString());
   // }
   // return result;
}
const detail = async (topicID) => {
   const words = await Vocab.find({ topic_id: topicID }).exec();
   return words;
   // const result = [];
   // const words = (await Vocab.find({ topic_id: topicID }).exec());
   // for (let i = 0; i < words.length; i++) {
   //    result.push(words[i]._id.toString());
   // }
   // return result;
}
module.exports = { topic, detail };
const Topic = require('../../models/topic')
/**
 * Find all words start with `anotherWord`
 * @param {String} searchWord 
 * @returns 
 */
const topic = async function (searchWord) {
   const regex = new RegExp(searchWord, 'i');
   const topics = await Topic.find({ topic_name: regex }).limit(10).exec();
   console.log(topics);
   const result = [];
   for (let i = 0; i < topics.length; i++) {
      result.push(topics[i]._id.toString());
   }
   return result;
}
module.exports = topic;
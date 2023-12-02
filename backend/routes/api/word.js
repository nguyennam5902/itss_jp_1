const Vocab = require('../../models/vocab')
/**
 * Find all words start with `anotherWord`
 * @param {String} searchWord 
 * @returns 
 */
const search = async function (searchWord) {
   const regex = new RegExp(searchWord, 'i');
   const words = await Vocab.find({ romaji: regex }).limit(10).exec();
   return words;
   
   console.log(words);
   // const result = [];
   // for (let i = 0; i < words.length; i++) {
   //    result.push(words[i]._id.toString());
   // }
   // return result;
}
const all = async (req, res) => {
   const words = await Vocab.find({}).exec();
   res.send({
      data: words,
      status: 200,
      message: 'OK'
   })
};
module.exports = { search, all };
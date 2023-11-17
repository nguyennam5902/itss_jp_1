const Word = require('../../models/word')
const KuromojiAnalyzer = require("kuroshiro-analyzer-kuromoji");
const Kuroshiro = require("kuroshiro")
const kuroshiro = new Kuroshiro();

kuroshiro.init(new KuromojiAnalyzer()).then(console.log('ENGINE STARTED'));

/**
 * Find all words start with `anotherWord`
 * @param {String} searchWord 
 * @returns 
 */
const search = async function (searchWord) {
   const words = await Word.find().exec();
   const result = [];
   for (let i = 0; i < words.length; i++) {
      const wordData = String(await kuroshiro.convert(words[i].word, { to: "romaji" }));
      if (wordData.includes(searchWord)) {
         result.push(words[i]);
      }
   }
   // console.log(result);
   // console.log(searchWord);
   return result;
}
module.exports = { search };
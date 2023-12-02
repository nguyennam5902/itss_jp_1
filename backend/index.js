const express = require('express');
const db = require('./database/db');
const wordAPI = require('./routes/api/word');
const app = express();
const KuromojiAnalyzer = require("kuroshiro-analyzer-kuromoji");
const Kuroshiro = require("kuroshiro");
const router = require('./routes/api/vocab');
const WordRequest = require('./models/word_request');
const Bookmark = require('./models/bookmark');
const { default: mongoose } = require('mongoose');
const kuroshiro = new Kuroshiro();
const cors = require('cors');

kuroshiro.init(new KuromojiAnalyzer()).then(console.log('APP STARTED'));
db.connect();
app.use(cors());
app.use(express.json());
app.set('port', 9000);

app.use('/api', router);
app.post('/api/login', require('./routes/api/login'));

// TODO
app.get('/api/words/', wordAPI.all);

app.get('/api/search/word/:word', async (req, res) => {
   const word = String(req.params.word);
   const romajiWord = await kuroshiro.convert(word, { to: "romaji" });
   console.log(`search: ${romajiWord}`);
   const result = await wordAPI.search(romajiWord);
   res.send({
      data: result,
      status: 200,
      message: 'OK'
   });
});
app.get('/api/search/topic/:topic', async (req, res) => {
   const topic = String(req.params.topic);
   const romajiTopic = await kuroshiro.convert(topic, { to: "romaji" });
   const result = await require('./routes/api/topic').topic(romajiTopic);
   res.send({
      data: result,
      status: 200,
      message: 'OK'
   });
})
app.get('/api/search/topic/', async (req, res) => {
   const result = await require('./routes/api/topic').topic("");
   res.send({
      data: result,
      status: 200,
      message: 'OK'
   });
})
app.get('/api/topic/:topicID', async (req, res) => {
   const topicID = req.params.topicID;
   console.log(topicID);
   const words = await require('./routes/api/topic').detail(topicID);
   res.send({
      data: words,
      status: 200,
      message: 'OK'
   })
})
app.get('api/bookmark/', async (req, res) => {
   let user = req.session.user;
   const bookmark = await Bookmark.findOne({ user_id: user }).exec();
   if (!bookmark) {
      const newBookmark = new Bookmark({
         user_id: user,
         vocab_marked: []
      });
      newBookmark.save().then(console.log('BOOKMARK CREATED!'))
   }
   else {
      res.send({
         data: bookmark.vocab_marked,
         status: 200,
         message: 'OK'
      });
   }
})
app.post('api/bookmark/:wordID', async (req, res) => {
   let user = req.session.user;
   let wordID = req.params.wordID;
   const bookmark = await Bookmark.findOne({ user_id: user }).exec();
   if (!bookmark) return res.status(401).send();
   else {
      bookmark.vocab_marked.push(new mongoose.Types.ObjectId(wordID));
      bookmark.save().then(console.log('ADDED'));
      res.send({
         data: null,
         status: 200,
         message: 'OK'
      });
   }
})
app.delete('api/bookmark/:wordID', async (req, res) => {
   let user = req.session.user;
   let wordID = req.params.wordID;
   const bookmark = await Bookmark.findOne({ user_id: user }).exec();
   if (!bookmark) return res.status(401).send();
   else {
      const index = bookmark.vocab_marked.indexOf(new mongoose.Types.ObjectId(wordID));
      bookmark.vocab_marked.splice(index, 1);
      bookmark.save().then(console.log('DELETED'));
      res.send({
         data: null,
         status: 200,
         message: 'OK'
      });
   }
})

// Do later
app.post('/login', (req, res) => {
   const username = req.body.username;
   const password = req.body.password;
   if (username === 'admin' && password === '123456') {
      // 登录成功，返回token
      res.send({
      });
   } else {
      res.send({ code: -1, msg: "failure", data: "" });
   }
});

app.post('/api/admin/word/', async (req, res) => {
   const requestID = String(req.body.requestID);
   const wr = WordRequest.findById(requestID).exec();
   if (wr != null) {

   } else {
      res.send({
         data: null,
         status: 404,
         message: 'Request not found'
      });
   }
});
app.put('/api/admin/word/', (req, res) => {
   const word = req.body.word;

})
app.delete('/api/admin/word/', (req, res) => {

})


app.listen(app.get('port'), () => {
   console.log(`Node app is running on port ${app.get('port')}`);
});
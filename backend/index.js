const express = require('express');
const db = require('./database/db');
const wordAPI = require('./routes/api/word');
const app = express();
const KuromojiAnalyzer = require("kuroshiro-analyzer-kuromoji");
const Kuroshiro = require("kuroshiro");
const router = require('./routes/api/vocab');
const WordRequest = require('./models/word_request');
const kuroshiro = new Kuroshiro();

kuroshiro.init(new KuromojiAnalyzer()).then(console.log('APP STARTED'));
db.connect();

app.use(express.json());
app.set('port', 9000);

app.use('/api', router);
app.post('/api/login', require('./routes/api/login'));

// TODO
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
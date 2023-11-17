const express = require('express');
const db = require('./backend/database/db');
const wordAPI = require('./backend/routes/api/word');
const app = express();
const KuromojiAnalyzer = require("kuroshiro-analyzer-kuromoji");
const Kuroshiro = require("kuroshiro")
const kuroshiro = new Kuroshiro();

kuroshiro.init(new KuromojiAnalyzer()).then(console.log('APP STARTED'));
db.connect();

app.use(express.json());
app.set('port', 3000);

app.get('/', (req, res) => {
   console.log("GET request received");
   res.sendFile(__dirname + '/index.html')
});
app.post('/api/login', require('./backend/routes/api/login'));

// TODO
app.get('/api/search/:word', async (req, res) => {
   const word = String(req.params.word);
   const romajiWord = await kuroshiro.convert(word, { to: "romaji" });
   const result = await wordAPI.search(romajiWord);
   res.send({
      data: result,
      meta:{
         'code': 200,
         'message': 'OK'
      }
   });
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
})

app.listen(app.get('port'), () => {
   console.log(`Node app is running on port ${app.get('port')}`);
});
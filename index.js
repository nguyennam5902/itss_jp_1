const express = require('express');
const app = express();
app.set('port', 3000);

app.get('/', (req, res) => {
   console.log("GET request received");
    res.sendFile(__dirname + '/index.html')
});

app.post('/login', (req, res) => {
   let username = req.body.username;
   let password = req.body.password;
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
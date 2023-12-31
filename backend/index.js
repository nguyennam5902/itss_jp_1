const express = require("express");
const db = require("./database/db");
const wordAPI = require("./routes/api/word");
const app = express();
const KuromojiAnalyzer = require("kuroshiro-analyzer-kuromoji");
const Kuroshiro = require("kuroshiro");
const router = require("./routes/api/vocab");
const WordRequest = require("./models/word_request");
const Bookmark = require("./models/bookmark");
const { default: mongoose } = require("mongoose");
const Vocab = require("./models/vocab");
const kuroshiro = new Kuroshiro();
const cors = require("cors");
const Test = require("./models/test");
const User = require("./models/user");
kuroshiro.init(new KuromojiAnalyzer()).then(console.log("APP STARTED"));
db.connect();
app.use(cors());
app.use(express.json());
app.set("port", 9000);

app.use("/api", router);
app.post("/api/login", require("./routes/api/login"));
app.post("/api/register", require("./routes/api/register"));
app.put("/api/profile/edit/:user", async (req, res) => {
  const userID = req.params.user;
  const user = await User.findById(userID).exec();
  if (user != null) {
    const full_name = req.body.full_name;
    const username = req.body.username;
    const birthday = req.body.birthday;
    const job = req.body.job;
    user.full_name = full_name;
    user.birthday = birthday;
    user.job = job;
    user.username = username;
    user.save().then(console.log(`SAVE:${user._id}`));
  }
  res.send({
    data: user,
    status: 200,
    message: "OK",
  });
});

// TODO
app.get("/api/words/", wordAPI.all);

app.get("/api/search/word/:word", async (req, res) => {
  const word = String(req.params.word);
  const romajiWord = await kuroshiro.convert(word, { to: "romaji" });
  console.log(`search: ${romajiWord}`);
  const result = await wordAPI.search(romajiWord);
  res.send({
    data: result,
    status: 200,
    message: "OK",
  });
});
app.get("/api/search/topic/:topic", async (req, res) => {
  const topic = String(req.params.topic);
  const romajiTopic = await kuroshiro.convert(topic, { to: "romaji" });
  const result = await require("./routes/api/topic").topic(romajiTopic);
  res.send({
    data: result,
    status: 200,
    message: "OK",
  });
});
app.get("/api/search/topic/", async (req, res) => {
  const result = await require("./routes/api/topic").topic("");
  res.send({
    data: result,
    status: 200,
    message: "OK",
  });
});
app.get("/api/topic/:topicID", async (req, res) => {
  const topicID = req.params.topicID;
  console.log(topicID);
  const words = await require("./routes/api/topic").detail(topicID);
  res.send({
    data: words,
    status: 200,
    message: "OK",
  });
});
app.get("/api/bookmark/:user", async (req, res) => {
  let user = req.params.user;
  const bookmark = await Bookmark.findOne({ user_id: user }).exec();
  if (!bookmark) {
    const newBookmark = new Bookmark({
      user_id: user,
      vocab_marked: [],
    });
    newBookmark.save().then(console.log("BOOKMARK CREATED!"));
  } else {
    const output = [];
    for (let i = 0; i < bookmark.vocab_marked.length; i++) {
      const word = await Vocab.findById(bookmark.vocab_marked[i]).exec();
      output.push(word);
    }
    res.send({
      data: output,
      status: 200,
      message: "OK",
    });
  }
});
app.post("/api/bookmark", async (req, res) => {
  let user = req.body.user;
  let wordID = req.body.wordID;
  const bookmark = await Bookmark.findOne({ user_id: user }).exec();
  if (!bookmark) return res.status(401).send();
  else {
    //  // Check if wordID already exists in vocab_marked
    // if (bookmark.vocab_marked.includes(wordID)) {
    //    return res.status(400).send({
    //    data: null,
    //    status: 400,
    //    message: 'Word is already bookmarked.',
    //    });
    // }
    bookmark.vocab_marked.push(new mongoose.Types.ObjectId(wordID));
    bookmark.save().then(console.log("ADDED"));
    res.send({
      data: null,
      status: 200,
      message: "OK",
    });
  }
});
// app.delete('/api/bookmark/:user/:wordID', async (req, res) => {
//    let user = req.params.user;
//    let wordID = req.params.wordID;
//    const bookmark = await Bookmark.findOne({ user_id: user }).exec();
//    if (!bookmark) return res.status(401).send();
//    else {
//       const index = bookmark.vocab_marked.indexOf(new mongoose.Types.ObjectId(wordID));
//       bookmark.vocab_marked.splice(index, 1);
//       bookmark.save().then(console.log('DELETED'));
//       res.send({
//          data: null,
//          status: 200,
//          message: 'OK'
//       });
//    }
// })

app.delete("/api/bookmark/:user/:wordID", async (req, res) => {
  try {
    const user = req.params.user;
    const wordID = req.params.wordID;

    const bookmark = await Bookmark.findOne({ user_id: user }).exec();

    if (!bookmark) {
      return res.status(404).json({
        data: null,
        status: 404,
        message: "Bookmark not found",
      });
    }

    const index = bookmark.vocab_marked.indexOf(
      new mongoose.Types.ObjectId(wordID)
    );

    if (index === -1) {
      return res.status(404).json({
        data: null,
        status: 404,
        message: "Word not found in bookmark",
      });
    }

    // Delete the item from the array
    bookmark.vocab_marked.splice(index, 1);

    // Save the updated bookmark
    await bookmark.save();

    console.log("DELETED");
    res.json({
      data: null,
      status: 200,
      message: "Item deleted from bookmark",
    });
  } catch (error) {
    console.error("Error deleting bookmark:", error);
    res.status(500).json({
      data: null,
      status: 500,
      message: "Internal Server Error",
    });
  }
});

// Do later
app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  if (username === "admin" && password === "123456") {
    // 登录成功，返回token
    res.send({});
  } else {
    res.send({ code: -1, msg: "failure", data: "" });
  }
});

app.post("/api/admin/word/", async (req, res) => {
  const hiragana = String(req.body.hiragana);
  const katakana = String(req.body.katakana);
  const kanji = String(req.body.kanji);
  const romaji = String(req.body.romaji);
  const type = String(req.body.type);
  const meaning = String(req.body.meaning);
  const example = String(req.body.example);
  const example_meaning = String(req.body.example_meaning);
  const synonym_id = [];
  //const tmp_synonym = req.body.synonym_id;
  // for (let i = 0; i < tmp_synonym.length; i++) {
  //    synonym_id.push(new mongoose.Types.ObjectId(String(tmp_synonym[i])));
  // }
  //const tmp_antonym = req.body.antonym_id;
  const antonym_id = [];
  // for (let i = 0; i < tmp_antonym.length; i++) {
  //    antonym_id.push(new mongoose.Types.ObjectId(String(tmp_antonym[i])));
  // }
  const topic_id = String(req.body.topic_id);
  const newWord = new Vocab({
    hiragana: hiragana,
    katakana: katakana,
    kanji: kanji,
    romaji: romaji,
    type: type,
    meaning: meaning,
    example: example,
    example_meaning: example_meaning,
    synonym_id: synonym_id,
    antonym_id: antonym_id,
    topic_id: topic_id,
  });
  newWord.save().then(console.log(`SAVED:${newWord._id.toString()}`));
  res.send({
    data: null,
    status: 200,
    message: "OK",
  });
});
app.put("/api/admin/word/:wordID", async (req, res) => {
  console.log(req.body);
  const wordID = req.params.wordID;
  const w = await Vocab.findById(wordID).exec();
  if (w == null) {
    res.send({
      data: null,
      status: 404,
      message: "WORD NOT FOUND",
    });
  } else {
    const hiragana = String(req.body.hiragana);
    const katakana = String(req.body.katakana);
    const kanji = String(req.body.kanji);
    const romaji = String(req.body.romaji);
    const type = String(req.body.type);
    const meaning = String(req.body.meaning);
    const example = String(req.body.example);
    const example_meaning = String(req.body.example_meaning);
    w.hiragana = hiragana;
    w.katakana = katakana;
    w.kanji = kanji;
    w.romaji = romaji;
    w.type = type;
    w.meaning = meaning;
    w.example = example;
    w.example_meaning = example_meaning;
    w.save().then(console.log("UPDATED"));
    res.send({
      data: null,
      status: 200,
      message: "OK",
    });
  }
});
app.delete("/api/admin/word/:wordID", (req, res) => {
  const wordID = req.params.wordID;
  Vocab.findByIdAndDelete(wordID).exec().then(console.log("DELETED"));
  res.send({
    data: null,
    status: 200,
    message: "OK",
  });
});
app.put("/api/admin/word/:wordID/comments/:commentID", async (req, res) => {
  const commentID = req.params.commentID;
  const wordID = req.params.wordID;
  const word = await Vocab.findById(wordID).exec();
  for (let i = 0; i < word.comments.length; i++) {
    if (String(word.comments[i]._id) === commentID) {
      word.comments[i].is_accept = true;
      break;
    }
  }
  word.save().then(console.log("ACCEPT"));
  res.send({
    data: null,
    status: 200,
    message: "OK",
  });
});

app.get("/api/admin/comments", async (req, res) => {
  comments = [];
  const word = await Vocab.find().exec();
  for (let i = 0; i < word.length; i++) {
    for (j = 0; j < word[i].comments.length; j++) {
      if (
        word[i].comments[j].is_accept == false &&
        word[i].comments[j].user_id != null
        //   word[i].kanji != ""
      ) {
        const comment = {
          ...word[i].comments[j].toObject(), // Copy existing properties from words[i].comments[j]
          kanji: word[i].kanji,
          hiragana: word[i].hiragana,
          word_id: word[i]._id,
        };

        comments.push(comment);
      }
    }
  }
  res.send({
    data: comments,
    status: 200,
    message: "OK",
  });
});

app.get("/api/vocab/:wordID/comments", async (req, res) => {
  comments = [];
  const wordID = req.params.wordID;
  const word = await Vocab.findById(wordID).exec();

  for (j = 0; j < word.comments.length; j++) {
    if (
      word.comments[j].is_accept == true &&
      word.comments[j].user_id != null
      //   word[i].kanji != ""
    ) {
      const user = await User.findById(word.comments[j].user_id).exec();
      const comment = {
        ...word.comments[j].toObject(), // Copy existing properties from words[i].comments[j]
        user: user.username,
      };

      comments.push(comment);
    }
  }

  res.send({
    data: comments,
    status: 200,
    message: "OK",
  });
});

app.get("api/test/history/:user_id", async (req, res) => {
  const user_id = req.params.user_id;
  const test = await Test.find({
    user_id: user_id,
  }).exec();
  if (test.length == 0) {
    //NO TEST RECORD
    res.send({
      data: [],
      status: 200,
      message: "OK",
    });
  } else {
    res.send({
      data: test,
      status: 200,
      message: "OK",
    });
  }
});

app.listen(app.get("port"), () => {
  console.log(`Node app is running on port ${app.get("port")}`);
});

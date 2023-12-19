<<<<<<< HEAD
const User = require("../../models/user");

const register = async (req, res) => {
   const fullname = req.body.fullname;
   const email = req.body.email;
   const username = req.body.username;
   const password = req.body.password;
   const user = await User.findOne({
      email: email
   }).exec();
   if (user == null) {
      const time = (new Date()).toLocaleString();
      const newUser = new User({
         username: username,
         password: password,
         email: email,
         full_name: fullname,
         create_time: time
      });
      newUser.save().then(console.log(newUser._id.toString()));
      res.send({
         data: newUser,
         status: 200,
         message: "OK"
      });
=======
const User = require('../../models/user')
/**
 * Login
 * @param {Request} req Request client -> server
 * @param {Request} res Respond server -> client
 */
const registerFunction = async function (req, res) {
   const full_name = req.body.full_name;
   const username = req.body.username;
   const email = req.body.email;
   const password = req.body.password;
   console.log(email);
   console.log(password);
   const user = await User.findOne({ email: email }).exec();
   if (user == null) {
      console.log("OK");
      const newUser = new User({
         full_name: full_name,
         username: username,
         email: email,
         password: password,
         birthday: new Date().toLocaleString(),
         create_time: new Date().toLocaleString(),
         job: ""
      });
      newUser.save().then(console.log("FINISH"));
      res.send({
         data: null,
         status: 200,
         message: "Register finish"
      })
>>>>>>> main
   }
   else {
      res.send({
         data: null,
         status: 404,
<<<<<<< HEAD
         message: "User exist"
      })
   }
}
module.exports = register;
=======
         message: "Register fail"
      })
   }
};
module.exports = registerFunction;
>>>>>>> main

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
         password: password
      });
      newUser.save().then(console.log("FINISH"));
      res.send({
         data: null,
         status: 200,
         message: "Register finish"
      })
   }
   else {
      res.send({
         data: null,
         status: 404,
         message: "Register fail"
      })
   }
};
module.exports = registerFunction;

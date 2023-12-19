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
   }
   else {
      res.send({
         data: null,
         status: 404,
         message: "User exist"
      })
   }
}
module.exports = register;
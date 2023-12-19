const User = require('../../models/user')
/**
 * Login
 * @param {Request} req Request client -> server
 * @param {Request} res Respond server -> client
 */
const loginFunction = async function (req, res) {
   const email = req.body.email;
   const password = req.body.password;
   console.log(email);
   console.log(password);
   const user = await User.findOne({ email: email, password: password }).exec();
   if (user == null) {
      res.send({
         data: null,
         status: 404,
         message: "Login failed"
      })
   }
   else {
      res.send({
         data: user._id.toString(),
         status: 200,
         message: "Login successful"
      })
   }
};
module.exports = loginFunction;

/**
 * Login
 * @param {Request} req Request client -> server
 * @param {Request} res Respond server -> client
 */
const loginFunction = function (req, res) {
   const username = req.body.username;
   const password = req.body.password;
   console.log(username);
   console.log(password);
   if (username === "admin" && password === "123456") {
      return res.status(200).json({ message: 'Login Successful' });
   } else {
      return res.status(401).json({ message: 'Invalid Credentials' })
   }
};
module.exports = loginFunction;

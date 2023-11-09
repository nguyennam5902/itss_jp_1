const { default: axios } = require('axios');
/**
 * Login
 * @param {Request} req Request client -> server
 * @param {Request} res Respond server -> client
 */
const login = function (req, res) {
   const apiResult = axios.post('/localhost:3000/api/login', {
      username: 'admin',
      password: '123456'
   });
   console.log(apiResult);
};
module.exports = { login };

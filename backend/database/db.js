const mongoose = require('mongoose');

async function connect() {
   try {
      await mongoose.connect('mongodb+srv://test:test@itss.nfhvwzs.mongodb.net/?retryWrites=true&w=majority');
      console.log('Connect MongoDB Successfully!!');
   } catch (error) {
      console.log('Connect MongoDB failure: ' + error.message);
   }
}

module.exports = { connect };
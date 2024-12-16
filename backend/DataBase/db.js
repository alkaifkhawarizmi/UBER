const mongoose = require('mongoose') 

module.exports = function connectToDB(){
  mongoose.connect(process.env.DB_CONNECT).then(console.log("Connected to database")).catch(err => console.log(err))
}
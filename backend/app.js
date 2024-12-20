const dotenv = require('dotenv');
dotenv.config()
const express = require('express');
const cors = require('cors')
const userRoutes = require('./routes/user.routes')
const captainRoutes = require('./routes/captain.routes')
const cookieparser = require('cookie-parser');
const cookieParser = require('cookie-parser');


const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use(cors())
app.get("/" , (req,res) => {
  res.send("Hello, world!");
})

app.use('/users' , userRoutes)

app.use('/captains', captainRoutes)


module.exports = app
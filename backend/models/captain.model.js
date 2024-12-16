const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const captainSchema = new mongoose.Schema({
  fullname : {
    firstname : {
      type : String,
      required : true,
      minlength : [3 , 'firstname must be at least 3 characters']
    },
    lastname : {
      type : String,
      minlength : [3 , 'lastname must be at least 3 characters']
    }
  },
  email : {
    type : String,
    required : true,
    unique : true,
    match : [ /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email format']
  },
  password : {
    type : String,
    required : true,
    select : false,
    minlength : [6 , 'password must be at least 8 characters long']
  },
  socketId : {
    type : String,
  },
  status : {
    type : String,
    enum : ['active', 'inactive'],
    default : 'inactive'
  },
  vehicle : {
    color : {
      type : String,
      required : true,
      minlength : [3 , 'color must be atleast 3 characters']
    },
    numberPlate : {
      type : String,
      required : true,
      unique : true,
      minlength : [8 , 'number plate must be at least 8 characters long']
    },
    capacity : {
      type : Number,
      required : true,
      min : [1 , 'capacity must be at least 1 person']
    },
    vehicleType : {
      type : String,
      enum : ['car', 'bike', 'auto'],
      required : true
    },

  },
  location : {
    lat : {
      type : Number,
    },
    lng : {
      type : Number,
    }
  }
})

captainSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({_id : this._id}, process.env.JWT_SECRET, {expiresIn : '1 day'})
  return token
}

captainSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password , this.password)
}

captainSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password , 10)
}

const captainModel = mongoose.model('captain' , captainSchema)

module.exports = captainModel
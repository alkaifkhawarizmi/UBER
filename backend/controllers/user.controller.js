const userModel = require('../models/user.model')
const userServices = require('../services/user.service')
const {validationResult} =  require("express-validator")
const bcrypt = require('bcrypt')
const BlackListTokenModel = require('../models/blacklist.model')


module.exports.registerUser = async function(req,res,next) {
  const errors = validationResult(req)
  if (!errors.isEmpty()){
    return res.status(400).json({ errors: errors.array() })
  }

  const {fullname , email, password} = req.body

  const hashPass = await userModel.hashPassword(password)

  const user = await userServices.createUser({
    firstname : fullname.firstname,
    lastname : fullname.lastname,
    email,
    password: hashPass
  })

  const token =  user.generateAuthToken()

  return res.status(200).json({token , user})
}

module.exports.loginUser = async function(req, res, next) {

  const errors = validationResult(req)
  if (!errors.isEmpty()){
    return res.status(400).json({ errors: errors.array() })
  }

  const {email , password} = req.body
  const user = await userModel.findOne({email}).select("+password");

  if (!user) return res.status(401).json({ message: 'invalid email or password' })

  const isMatch = await user.comparePassword(password)

  if(!isMatch)return res.status(401).json({ message: 'invalid email or password' })

    const token =  user.generateAuthToken()

    res.cookie('token', token)

    res.status(200).json({ token , user })
}

module.exports.getProfile = async function(req, res, next) {
  return res.status(200).json(req.user)
}

module.exports.logOut = async function(req, res, next) {
  res.clearCookie('token')
  const token = req.cookies.token || req.headers.authorization?.split(' ')[1]
  if(!token) return res.status(401).json({ message: 'No token provided' })
  await BlackListTokenModel.create({token})
  return res.status(200).json({ message: 'Logged out successfully' })
}
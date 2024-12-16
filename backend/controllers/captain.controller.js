const captainModel = require('../models/captain.model')
const captainService = require('../services/captain.service')
const { validationResult } = require('express-validator')
const BlackListTokenModel = require('../models/blacklist.model')

module.exports.registerCaptain = async function (req , res , next) {

  const errors = await validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  const { fullname , email , password , vehicle } = req.body

  const hashedPassword = await captainModel.hashPassword(password)

  const captain = await captainService.createCaptain({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashedPassword,
    color: vehicle.color,
    numberPlate: vehicle.numberPlate,
    capacity: vehicle.capacity,
    vehicleType: vehicle.vehicleType
  })

  const token = captain.generateAuthToken()

  res.status(201).json({ captain, token })

}

module.exports.loginCaptain = async function (req , res , next) {
  
  const errors = await validationResult(req)

  if(!errors.isEmpty()) { 
    return res.status(400).json({ errors: errors.array() })
  }

  const { email , password } = req.body

  const captain = await captainModel.findOne( { email}).select("+password")

  if(!captain) {
    return res.status(401).json({ message: 'Invalid email or password' })
  }

  const isMatch = await captain.comparePassword(password)

  if(!isMatch){
    return res.status(401).json({ message: 'Invalid email or password' })
  }

  const token = captain.generateAuthToken()

  res.cookie('token', token)

  res.json({ captain, token })

}

module.exports.captainProfile = async function (req, res, next) {
  return res.status(200).json(req.captain)
}

module.exports.logoutCaptain = async function (req , res , next) {
  res.clearCookie('token')
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1]
    if(!token) return res.status(401).json({ message: 'No token provided' })
    await BlackListTokenModel.create({token})
    return res.status(200).json({ message: 'Logged out successfully' })
}
const userModel = require('../models/user.model')
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
const blacklistModel = require ('../models/blacklist.model')
const captainModel = require('../models/captain.model')

module.exports.authUser = async (req , res , next) => {
  const token = req.cookies.token || req.headers.authorization.split(' ')[1]
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  const isBlackListed = await blacklistModel.findOne({token})

  if (isBlackListed) {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  try {
    const decoded = jwt.verify(token , process.env.JWT_SECRET)
    const user = await userModel.findById(decoded._id)
    req.user = user
    return next()
  } catch (error) {
    return res.status(500).json({ message: 'Unauthorized' })
  }
}

module.exports.authCaptain = async (req , res , next) => {
  const token = req.cookies.token || req.headers.authorization?.split(' ')[1]
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  const isBlackListed = await blacklistModel.findOne({token})

  if (isBlackListed) {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  try {
    const decoded = jwt.verify(token , process.env.JWT_SECRET)
    const captain = captainModel.findById(decoded._id)
    req.captain = captain
    next()
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized' })
  }

}
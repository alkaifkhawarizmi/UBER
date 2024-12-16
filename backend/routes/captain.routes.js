const express = require('express');
const router = express.Router()
const { body } = require('express-validator')
const captainController = require('../controllers/captain.controller');
const authMiddleware = require('../middlewares/auth.middleware')

router.post("/register" , 
  [
  body('email').isEmail().withMessage('Invalid email'),
  body('fullname.firstname').isLength({min : 3}).withMessage('first name must be at least 3 characters'),
  body('password').isLength({ min: 6 }).withMessage('password must be at least 6 characters'),
  body('vehicle.color').isLength({min : 3}).withMessage('color must be at least 3 characters'),
  body('vehicle.numberPlate').isLength({min : 3}).withMessage('number plate must be at least 3 characters'),
  body('vehicle.capacity').isInt({min : 1}).withMessage('capacity must be at least 1'),
  body('vehicle.vehicleType').isIn([ 'car', 'bike', 'auto']).withMessage('Invalid Type'),
] ,
captainController.registerCaptain
)

router.post("/login" , 
  [
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({ min: 6 }).withMessage('password must be at least 6 characters')
  ] , 
  captainController.loginCaptain
)

router.get("/profile" , authMiddleware.authCaptain , captainController.captainProfile)

router.get("/logout" , authMiddleware.authCaptain , captainController.logoutCaptain)

module.exports = router
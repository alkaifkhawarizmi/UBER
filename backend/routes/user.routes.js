const express = require('express')
const router = express.Router()
const {body} =  require("express-validator")
const userController = require('../controllers/user.controller')
const authMiddleware = require('../middlewares/auth.middleware')

 
router.post("/register" , 
  [
  body('email').isEmail().withMessage('invalid email'),
  body('fullname.firstname').isLength({min :3}).withMessage('first name is not a valid'),
  body('password').isLength({min :6}).withMessage('password must be at least 6 characters')
] , userController.registerUser
)

router.post("/login",
   [
  body('email').isEmail().withMessage('invalid email'),
  body('password').isLength({min :6}).withMessage('password must be at least 6 characters')
] , userController.loginUser)

router.get("/profile",authMiddleware.authUser,userController.getProfile)

router.get("/logout",authMiddleware.authUser,userController.logOut)

module.exports = router; 
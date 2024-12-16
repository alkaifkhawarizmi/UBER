const captainModel = require('../models/captain.model')

module.exports.createCaptain = async ({
  firstname , lastname , email , password , color , numberPlate , capacity , vehicleType
}) => {

  console.log("here")
  
  console.log(firstname , lastname , email , password , color , numberPlate , capacity , vehicleType)

  if(!firstname || !email || !password || !color || !numberPlate || !capacity || !vehicleType){
    throw new Error('All fields are required')
  }

  const captain = captainModel.create(
    {
    fullname : { firstname , lastname },
    email,
    password,
    vehicle : {
      color,
      numberPlate,
      capacity,
      vehicleType
    }
  }) 

  return captain

}
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
function CaptainSignUp() {

  const [email , setEmail] = useState()

  const [password, setPassword] = useState()

  const [userData , setUserData] = useState({})

  const [vehicle, setVehicle] = useState({
    color : "",
    numberPlate : "",
    capacity : "",
    vehicleType : ""
  })

  const submitHandler = (e) => {
    e.preventDefault()
    setUserData({email , password , vehicle})
    setEmail('')
    setPassword('')
    setVehicle({
      color : "",
      numberPlate : "",
      capacity : "",
      vehicleType : "",
    })
  }


  return (
    <div>
      <div className='p-7 flex flex-col justify-between h-screen'>
    <div>
      <img className='w-40 mb-6' src="https://cdn-assets-us.frontify.com/s3/frontify-enterprise-files-us/eyJwYXRoIjoicG9zdG1hdGVzXC9maWxlXC9zRnZwVVBNdENEMXBWdERUeE1wYS5zdmcifQ:postmates:A8OC11fozEtvPxgMJgJFsVd6exFOLlO78I2aR0JCUIc?width=800" alt="" />
      <form onSubmit={(e) => submitHandler(e)}>
      <h3 className='text-xl font-medium mb-2'>What's Your Full Name</h3>
     <div className='flex justify-between'>
     <input onChange={(e) => setEmail(e.target.value)} className='bg-gray-200 mb-7 rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base' required type="text" placeholder='first name' />
     <input onChange={(e) => setEmail(e.target.value)} className='bg-gray-200 mb-7 rounded px-4 py-2 border w-2/5 text-lg placeholder:text-base' required type="text" placeholder='last name' />
     </div>
        <h3 className='text-xl font-medium mb-2'>What's Your Email</h3>
        <input onChange={(e) => setEmail(e.target.value)} className='bg-gray-200 mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' required type="email" placeholder='email@example.com' />
        <h3 className='text-xl text-center font-medium mb-2'>Enter Your Vehicle Details : </h3>
        <h3 className='text-xl mt-4 font-medium mb-2'>Enter Your Vehicle Type</h3>
        <div className='flex mt-4 justify-between text-xl font-semibold text-gray-600'>
        <label>
        <input
          type="radio"
          name="vehicle"
          value="Bike"
          checked={vehicle.vehicleType === 'Bike'}
          onChange={(e) => setVehicle((prev) => ({...prev , vehicleType : e.target.value}))}
        />
        Bike
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="vehicle"
          value="Car"
          checked={vehicle.vehicleType === 'Car'}
          onChange={(e) => setVehicle((prev) => ({...prev , vehicleType : e.target.value}))}
        />
        Car
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="vehicle"
          value="Auto"
          checked={vehicle.vehicleType === 'Auto'}
          onChange={(e) => setVehicle((prev) => ({...prev , vehicleType : e.target.value}))}
        />
        Auto
      </label>
      <br />
        </div>
        <p className='text-xl mt-1font-medium mt-2 mb-2'>You selected: {vehicle.vehicleType}</p>
        <h3 className='text-xl mt-6 font-medium mb-2'>Enter Vehicle Capacity</h3>
        <input onChange={(e) => setVehicle((prev) => ({...prev , capacity : e.target.value}))} className='bg-gray-200 mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' required type="number" placeholder='atleast 1' />
        <h3 className='text-xl font-medium mb-2'>Vehicle Number </h3>
        <input onChange={(e) => setVehicle((prev) => ({...prev , numberPlate : e.target.value}))} className='bg-gray-200 mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' required type="text" placeholder='RJ-00-XX-0000 ' />
        <h3 className='text-xl font-medium mb-2'>Vehicle Color</h3>
        <input onChange={(e) => setVehicle((prev) => ({...prev , color : e.target.value}))} className='bg-gray-200 mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' required type="text" placeholder='vehicle color' />
        <h3 className='text-xl font-medium mb-2'>Enter Password</h3>
        <input onChange={(e) => setPassword(e.target.value)} className='bg-gray-200 mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' required type="password" placeholder='password' />
        <button className='bg-black text-white font-semibold mb-7 rounded px-4 py-3 border w-full text-xl placeholder:text-base'>Create Account</button>
      </form>
    </div>
    <div className='flex  flex-col justify-between h-full'>
      <h1 className='text-xl text-center font-semibold'>Allready have an account ? <Link to={'/captain-login'} className='text-blue-600'>Log in </Link></h1>
    <p className='text-gray-400'>By proceeding, you consent to get calls, WhatsApp or SMS/RCS messages, including by automated means, from Uber and its affiliates to the number provided.</p>
    </div>
    </div>
    </div>
  )
}

export default CaptainSignUp
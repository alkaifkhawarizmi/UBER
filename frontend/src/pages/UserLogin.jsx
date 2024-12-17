import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function UserLogin() {

  const [email , setEmail] = useState()

  const [password, setPassword] = useState()

  const [userData , setUserData] = useState({})

  const submitHandler = (e) => {
    e.preventDefault()
    setUserData({email , password})
    setEmail('')
    setPassword('')
  }

  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
    <div>
      <img className='w-40 mb-6' src="https://cdn-assets-us.frontify.com/s3/frontify-enterprise-files-us/eyJwYXRoIjoicG9zdG1hdGVzXC9hY2NvdW50c1wvODRcLzQwMDA1MTRcL3Byb2plY3RzXC8yN1wvYXNzZXRzXC9lZFwvNTUwOVwvNmNmOGVmM2YzMjFkMTA3YThmZGVjNjY1NjJlMmVmMzctMTYyMDM3Nzc0OC5haSJ9:postmates:9KZWqmYNXpeGs6pQy4UCsx5EL3qq29lhFS6e4ZVfQrs?width=800" alt="" />
      <form onSubmit={(e) => submitHandler(e)}>
        <h3 className='text-xl font-medium mb-2'>What's Your Email</h3>
        <input onChange={(e) => setEmail(e.target.value)} className='bg-gray-200 mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' required type="email" placeholder='email@example.com' />
        <h3 className='text-xl font-medium mb-2'>Enter Password</h3>
        <input onChange={(e) => setPassword(e.target.value)} className='bg-gray-200 mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' required type="password" placeholder='password' />
        <button className='bg-black text-white font-semibold mb-7 rounded px-4 py-3 border w-full text-xl placeholder:text-base'>Login</button>
      </form>
    </div>
    <div className='flex  flex-col justify-between h-full'>
      <h1 className='text-xl text-center font-semibold'>New Here ? <Link to={'/signup'} className='text-blue-600'>Create New Account</Link></h1>
    <Link to={'/captain-login'} className='bg-green-600 flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-3 border w-full text-xl placeholder:text-base'>Sign in as a captain</Link>
    </div>
    </div>
  )
}

export default UserLogin
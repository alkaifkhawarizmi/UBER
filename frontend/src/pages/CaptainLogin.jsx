import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import CaptainContext from '../context/CaptainContext'

function CaptainLogin() {

  const {captainData , setCaptain} = useContext(CaptainContext) 

  const navigate = useNavigate()

  const [email , setEmail] = useState()

  const [password, setPassword] = useState()


  const submitHandler = async (e) => {
    e.preventDefault()

    const captainData = {email, password}

    try {
      
      const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login` , captainData , {headers: { 'Content-Type': 'application/json' }})
      if(res.status === 200){
        toast.success("login successful")
        setCaptain(res.data)
        localStorage.setItem('token', JSON.stringify(res.data.token))
        navigate('/captain-home')
      }
    } catch (error) {
      toast.error("Failed to login")
    }

    setEmail('')
    setPassword('')
  }

  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
    <div>
      <img className='w-40 mb-6' src="https://cdn-assets-us.frontify.com/s3/frontify-enterprise-files-us/eyJwYXRoIjoicG9zdG1hdGVzXC9maWxlXC9zRnZwVVBNdENEMXBWdERUeE1wYS5zdmcifQ:postmates:A8OC11fozEtvPxgMJgJFsVd6exFOLlO78I2aR0JCUIc?width=800" alt="" />
      <form onSubmit={(e) => submitHandler(e)}>
        <h3 className='text-xl font-medium mb-2'>What's Your Email</h3>
        <input value={email} onChange={(e) => setEmail(e.target.value)} className='bg-gray-200 mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' required type="email" placeholder='email@example.com' />
        <h3 className='text-xl font-medium mb-2'>Enter Password</h3>
        <input value={password} onChange={(e) => setPassword(e.target.value)} className='bg-gray-200 mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' required type="password" placeholder='password' />
        <button className='bg-black text-white font-semibold mb-7 rounded px-4 py-3 border w-full text-xl placeholder:text-base'>Login</button>
      </form>
    </div>
    <div className='flex  flex-col justify-between h-full'>
      <h1 className='text-xl text-center font-semibold'>Join a fleet ? <Link to={'/captain-signup'} className='text-blue-600'>Register as a Captain</Link></h1>
    <Link to={'/login'} className='bg-orange-600 flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-3 border w-full text-xl placeholder:text-base'>Sign in as a User</Link>
    </div>
    </div>
  )
}

export default CaptainLogin
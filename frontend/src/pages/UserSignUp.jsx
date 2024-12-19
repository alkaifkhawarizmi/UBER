import React, { useContext, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserContext from '../context/UserContext';


function UserSignUp() {

  const navigate = useNavigate()
  const {user , setUser} = useContext(UserContext)
  const [email , setEmail] = useState("")
  const [fullname , setFullName] = useState({
    firstname : "",
    lastname : ""
  })
  const [password, setPassword] = useState("")


  const submitHandler = async (e) => {
    e.preventDefault()

    if(!email || !password || !fullname.firstname) { 
      return toast.error("all fields are required")
    }
  
  
    if(password.length<8){
      return toast.error("password should be at least 8 characters long")
    }

    const userdata = {
      email,
      password,
      fullname
    };

    try {
      const res = await axios.post('http://localhost:4000/users/register',userdata ,{headers: { 'Content-Type': 'application/json' }})
      // console.log(res)
      if(res.status === 200){
        toast.success("User registered successfully")
        setUser(res.data)
        localStorage.setItem("token" , JSON.stringify(res.data.token))
        navigate('/home')
      }
    } catch (error) {
      toast.error("Registration failed")
    }

    setEmail('')
    setPassword('')
    setFullName({firstname : "", lastname : ""})
    
  }


  return (
    <div>
      <div className='p-7 flex flex-col justify-between h-screen'>
    <div>
      <img className='w-40 mb-6' src="https://cdn-assets-us.frontify.com/s3/frontify-enterprise-files-us/eyJwYXRoIjoicG9zdG1hdGVzXC9hY2NvdW50c1wvODRcLzQwMDA1MTRcL3Byb2plY3RzXC8yN1wvYXNzZXRzXC9lZFwvNTUwOVwvNmNmOGVmM2YzMjFkMTA3YThmZGVjNjY1NjJlMmVmMzctMTYyMDM3Nzc0OC5haSJ9:postmates:9KZWqmYNXpeGs6pQy4UCsx5EL3qq29lhFS6e4ZVfQrs?width=800" alt="" />
      <form onSubmit={(e) => submitHandler(e)}>
      <h3 className='text-xl font-medium mb-2'>What's Your Full Name</h3>
     <div className='flex justify-between'>
     <input value={fullname.firstname} onChange={(e) => setFullName((prev) =>  ({...prev , firstname : e.target.value}))} className='bg-gray-200 mb-7 rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base' required type="text" placeholder='first name' />
     <input value={fullname.lastname} onChange={(e) => setFullName((prev) =>  ({...prev , lastname : e.target.value}))} className='bg-gray-200 mb-7 rounded px-4 py-2 border w-2/5 text-lg placeholder:text-base' type="text" placeholder='last name' />
     </div>
        <h3 className='text-xl font-medium mb-2'>What's Your Email</h3>
        <input value={email} onChange={(e) => setEmail(e.target.value)} className='bg-gray-200 mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' required type="email" placeholder='email@example.com' />
        <h3 className='text-xl font-medium mb-2'>Enter Password</h3>
        <input value={password} onChange={(e) => setPassword(e.target.value)} className='bg-gray-200 mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' required type="password" placeholder='password' />
        <button className='bg-black text-white font-semibold mb-7 rounded px-4 py-3 border w-full text-xl placeholder:text-base'>Create Account</button>
      </form>
    </div>
    <div className='flex  flex-col justify-between h-full'>
      <h1 className='text-xl text-center font-semibold'>Allready have an account ? <Link to={'/login'} className='text-blue-600'>Log in </Link></h1>
    <p className='text-gray-400'>By proceeding, you consent to get calls, WhatsApp or SMS/RCS messages, including by automated means, from Uber and its affiliates to the number provided.</p>
    </div>
    </div>
    </div>
  )
}

export default UserSignUp
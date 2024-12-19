import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function LogOut() {

  const navigate = useNavigate()
  const token = JSON.parse(localStorage.getItem('token'))

  useEffect(() => {
    if(!token) {
      navigate('/login')
    }
  },[])

  async function handleLogout(token){

    try {

      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout` , {
        headers: { Authorization : `Bearer ${token}` }
      }) 

      if(res.status === 200 ){
        toast.success("Logged out successfully")
        localStorage.removeItem('token')
        navigate('/login')
      }

    } catch (error) {
      toast.error("Failed to log out")
    }

  }

  return (
    <div>
      <button onClick={() => handleLogout(token)}>Logout</button>
    </div>
  )
}

export default LogOut
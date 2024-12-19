import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function CaptainLogout() {

  const navigate = useNavigate()
  const token = JSON.parse(localStorage.getItem('token'))

  useEffect(() => {
    if(!token) {
      navigate('/captain-login')
    }
  },[])

  async function handleLogout(token){

    try {

      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/captains/logout` , {
        headers: { Authorization : `Bearer ${token}` }
      }) 

      if(res.status === 200 ){
        toast.success("Logged out successfully")
        localStorage.removeItem('token')
        navigate('/captain-login')
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

export default CaptainLogout
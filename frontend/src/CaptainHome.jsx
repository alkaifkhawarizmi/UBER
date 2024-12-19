import React, { useContext, useEffect, useState } from 'react'
import CaptainContext from './context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import CaptainLogout from './pages/CaptainLogOut'

function CaptainHome() {

  const navigate = useNavigate()

  const {captain , setCaptain} = useContext(CaptainContext)

  const [isLoading , setIsLoading] = useState(true)

  const token = JSON.parse(localStorage.getItem('token'))


  useEffect(() => {
    if (!token) {
      navigate('/captain-login')
     }
     verifyToken(token)
  },[])

  async function verifyToken() {
    try {
      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile` , {
        headers: { Authorization : `Bearer ${token}` }
      })
      if (res.status === 200) {
        setIsLoading(false)
      }
    } catch (error) {
      localStorage.removeItem('token')
      navigate('/captain-login')
    }
  }

  return (
    <div>
      {
        isLoading ? <h1>loading</h1> : <div>
          <h1>home</h1>
          <CaptainLogout/>
          </div>
      }
    </div>
  )
}

export default CaptainHome
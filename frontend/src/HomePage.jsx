import React, { useContext, useEffect } from 'react'
import UserContext from './context/UserContext'
import { useNavigate } from 'react-router-dom'
import LogOut from './pages/LogOut'

function HomePage() {

  const {user , setUser} = useContext(UserContext)
  
  const navigate = useNavigate()

  const token = JSON.parse(localStorage.getItem('token'))

  useEffect(() => {
    if(!token){
      navigate('/login')
    }
    verifyToken(token)
  },[])

  async function verifyToken(token) {

    try {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      })
      
    } catch (error) {
      localStorage.removeItem('token')
      navigate('/login')
    }

  }

  return (
    <div>
      <h1>HomePage</h1>
      <LogOut />
    </div>
  )
}

export default HomePage
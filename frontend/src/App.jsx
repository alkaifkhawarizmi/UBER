import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignUp from './pages/UserSignUp'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignUp from './pages/CaptainSignUp'
import { ToastContainer } from 'react-toastify'
import HomePage from './HomePage'
import { UserProvider } from './context/UserContext'
import LogOut from './pages/LogOut'
import { CaptainProvider } from './context/CaptainContext'
import CaptainHome from './CaptainHome'

function App() {
  return (
    <CaptainProvider>
    <UserProvider> 
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<UserLogin/>} />
        <Route path='/signup' element={<UserSignUp/>} />
        <Route path='/home' element={<HomePage/>} />
        <Route path='/logout' element={<LogOut/>} />
        <Route path='/captain-login' element={<CaptainLogin/>} />
        <Route path='/captain-signup' element={<CaptainSignUp/>} />
        <Route path='/captain-home' element={<CaptainHome/>}/>
      </Routes>
      <ToastContainer />
    </div>
    </UserProvider>
    </CaptainProvider>
  )
}

export default App
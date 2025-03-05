import React, { useEffect } from 'react'
import Navbar from './components/Navbar'

import HomePage from "./pages/HomePage"
import SignUpPage from "./pages/SignUpPage"
import LogInPage from "./pages/LogInPage"
import SettingsPage from "./pages/SettingsPage"
import ProfilePage from "./pages/ProfilePage"

import {Routes,Route} from "react-router-dom"
import { useAuthStore } from './store/useAuthStore'

import {Loader} from "lucide-react"

const App = () => {
  const {authUser,checkAuth, isChekingAuth} = useAuthStore()

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  console.log({authUser})
  if(isChekingAuth && !authUser){
    return(
      <div className='flex items-center justify-center h-screen'>
        <Loader className="size-10 animate-spin"/>
      </div>
    )
  }

  return (
    <div>

      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/signup' element={<SignUpPage/>} />
        <Route path='/login' element={<LogInPage/>} />
        <Route path='/settings' element={<SettingsPage/>} />
        <Route path='/profile' element={<ProfilePage/>} />

      </Routes>

    </div>
  )
}

export default App
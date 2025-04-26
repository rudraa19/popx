import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Welcome from './components/Welcome/Welcome'
import './App.css'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import Setting from './components/Setting/Setting'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </>
  )
}

export default App
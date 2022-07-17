
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import "./App.css"
import Load from './Component/Loading/Load'



import Home from './Pages/Home'

const App = () => {
  return (
    <div className="website">
   
        
    
    <Routes>
    <Route path="/" element={<Load />} />

      <Route path={'home'} element={<Home/>}></Route>
    </Routes>
    </div>)
}

export default App
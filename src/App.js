import React from 'react'
import "./App.css"
import Navbar from './Component/Navbar'
import Sidebar from './Component/Sidebar'

const App = () => {
  return (
    <div className="website">
        <Navbar/>
        <Sidebar/>
    </div>
  )
}

export default App
import { Canvas } from '@react-three/fiber'
import React from 'react'
import "./App.css"
import TopModal from './Component/TopModal'
import Navbar from './Component/Navbar'
import Sidebar from './Component/Sidebar'

const App = () => {
  return (
    <div className="website">
        <Navbar/>
        <Sidebar/>
        <TopModal/>
    </div>
  )
}

export default App
import React from 'react'
import About from '../Component/About/About'
import Skills from '../Component/Skills/Skills'
import Navbar from '../Component/Navbar/Navbar'
import Sidebar from '../Component/SidebarL/Sidebar'
import Work from '../Component/Work/Work'
import Contactme from '../Component/Contact/Contactme'
import { useRef } from 'react'

const Home = () => {

  return (
    <div>
      <Navbar />
      <About   ></About>
      <Skills></Skills>
      <Work /> 
        <Sidebar/>
      
        <Contactme />
    </div>
  )
}

export default Home
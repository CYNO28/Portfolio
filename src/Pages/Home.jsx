import React from 'react'
import About from '../Component/About/About'
import Skills from '../Component/Skills/Skills'
import Navbar from '../Component/Navbar/Navbar'
import Sidebar from '../Component/SidebarL/Sidebar'
import TopModal from '../Component/TopModal'
import Work from '../Component/Work/Work'
import Contactme from '../Component/Contact/Contactme'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <About></About>
      <Skills></Skills>
      <Work/> 
        <Sidebar/>
      
        <Contactme/>
        {/* <TopModal/> */}
    </div>
  )
}

export default Home
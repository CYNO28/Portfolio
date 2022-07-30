import React from 'react'


import Navbar from '../Component/Navbar/Navbar'



import { useRef } from 'react'
import NavbarMid from '../Component/NavbarMid/NavbarMid'
import About from '../Component/About/About'
import Skills from '../Component/Skills/Skills'
import Loading from '../Component/Loading/Load'
import Projects from '../Component/Projects/Projects'
import Contact from '../Component/ContactMe/Contact'



const Home = () => {

  return (
    <div>
      <Navbar />
      
      <NavbarMid/>
      <About/>


      <Skills/>
      <Projects/>
      <Contact/>


    </div>
  )
}

export default Home
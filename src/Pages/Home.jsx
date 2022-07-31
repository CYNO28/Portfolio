import React from 'react'


import Navbar from '../Component/Navbar/Navbar'



import NavbarMid from '../Component/NavbarMid/NavbarMid'
import About from '../Component/About/About'
import Skills from '../Component/Skills/Skills'

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
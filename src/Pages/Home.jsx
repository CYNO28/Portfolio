import React from 'react'


import Navbar from '../Component/Navbar/Navbar'



import NavbarMid from '../Component/NavbarMid/NavbarMid'
import About from '../Component/About/About'
import Skills from '../Component/Skills/Skills'

// import Projects from '../Component/Projects/Projects'
import Contact from '../Component/ContactMe/Contact'
import Work from '../Component/Work/Work'



const Home = () => {

  return (
    <div>
      <Navbar />
      
      <NavbarMid/>
      <About/>

      <Skills/>
      <Work/>
      {/* <Projects/> */}
   
      <Contact/>


    </div>
  )
}

export default Home
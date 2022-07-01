import React from 'react'
import About from '../Component/About'
import Skills from '../Component/Skills'
import Navbar from '../Component/Navbar'
import Sidebar from '../Component/Sidebar'
import TopModal from '../Component/TopModal'
import Work from '../Component/Work'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <About></About>
      <Skills></Skills>
      <Work>  </Work>
        <Sidebar/>
        {/* <TopModal/> */}
    </div>
  )
}

export default Home
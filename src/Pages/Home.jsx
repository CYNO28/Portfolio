import React from 'react'
import About from '../Component/About/About'
import Skills from '../Component/Skills/Skills'
import Navbar from '../Component/Navbar/Navbar'
import Sidebar from '../Component/SidebarL/Sidebar'
import TopModal from '../Component/TopModal'
import Work from '../Component/Work/Work'
import Contactme from '../Component/Contact/Contactme'
import { useRef } from 'react'

const Home = () => {
  const work_ref = useRef()
  const about_ref = useRef()
  const skills_ref = useRef()
  const contact_ref = useRef()
function scroller(str){
  if (str==='work'){
    work_ref.current.scrollIntoView({behavior: 'smooth'})
  }
  if(str==='about'){
    about_ref.current.scrollIntoView({behavior: 'smooth'})
  }
  if(str==='skills'){
    skills_ref.current.scrollIntoView({behavior: 'smooth'})
  }
  if(str==='contact'){
    contact_ref.current.scrollIntoView({behavior: 'smooth'})
  }
  
}
  return (
    <div>
      <Navbar />
      <About  ref={about_ref} ></About>
      <Skills ref={skills_ref}></Skills>
      <Work  ref={work_ref}/> 
        <Sidebar/>
      
        <Contactme ref={contact_ref} />
        {/* <TopModal/> */}
    </div>
  )
}

export default Home
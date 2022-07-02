import React from 'react'
import {FiGithub,FiLinkedin,FiInstagram} from 'react-icons/fi'
import {SiGmail} from 'react-icons/si'
import style from './sidebar.module.css'
const Sidebar = () => {
  return (
    <>
    <div className={style.sidebar_flexbox}>
        <div></div>
<div onClick={()=>{Window.location.href="https://github.com/CYNO28"}} >
<FiGithub/>
</div>
<div onClick={()=>{window.location.href ="https://www.linkedin.com/in/dinesh-singh-95a887223/"}}>
<FiLinkedin />
</div>
<div>
<FiInstagram  onClick={()=>{window.location.href="https://www.instagram.com/din_2898/"}}/>
</div>
<div>
    <SiGmail  onClick={()=>{window.location.href="https://dineshsingh9582@gmail.com"}}/>
</div>
<div className={style.Pline}>
    <div className={style.line}></div>
</div>
    </div>
    </>
  )
}

export default Sidebar
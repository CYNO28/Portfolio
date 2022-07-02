import React from 'react'
import {FiGithub,FiLinkedin,FiInstagram} from 'react-icons/fi'
import {SiGmail} from 'react-icons/si'
import style from './sidebar.module.css'
const Sidebar = () => {
  return (
    <>
    <div className={style.sidebar_flexbox}>
        <div></div>
<div onClick={()=>{Window.open("https://github.com/CYNO28","_blank")}} >
<FiGithub/>
</div>
<div onClick={()=>{window.open("https://www.linkedin.com/in/dinesh-singh-95a887223/","_blank")}}>
<FiLinkedin />
</div>
<div>
<FiInstagram  onClick={()=>{window.open("https://www.instagram.com/din_2898/","_blank")}}/>
</div>
<div>
    <SiGmail  onClick={()=>{window.open("https://dineshsingh9582@gmail.com","_blank")}}/>
</div>
<div className={style.Pline}>
    <div className={style.line}></div>
</div>
    </div>
    </>
  )
}

export default Sidebar
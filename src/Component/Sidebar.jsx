import React from 'react'
import {FiGithub,FiLinkedin,FiInstagram} from 'react-icons/fi'
import {SiGmail} from 'react-icons/si'
import style from './sidebar.module.css'
const Sidebar = () => {
  return (
    <>
    <div className={style.sidebar_flexbox}>
        <div></div>
<div >
<FiGithub onClick={()=>{}}/>
</div>
<div>
<FiLinkedin onClick={()=>{}}/>
</div>
<div>
<FiInstagram  onClick={()=>{}}/>
</div>
<div>
    <SiGmail  onClick={()=>{}}/>
</div>
<div className={style.Pline}>
    <div className={style.line}></div>
</div>
    </div>
    </>
  )
}

export default Sidebar
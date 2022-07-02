import React from 'react'
import {Link} from 'react-router-dom'
import style from './navbar.module.css'
const Navbar = ({scroller}) => {
  return (
    <>
      <div className={style.navbar}>
      <div>
        <div className={style.navlinks}>
          <div className={style.navlink}>
          <p>00.</p>
          <a className={style.link} href="#about"  >About</a>
          </div>
          <div className={style.navlink}>
          <p>01.</p>
          <a className={style.link}  href="#work" >Work</a>
          </div>
          <div className={style.navlink}>
          <p>02.</p>
          <a className={style.link} href="#contact" >Contact</a>
          </div>
          <div className={style.navlink}>
            <p>03.</p>
          <a className={style.link} href="https://drive.google.com/file/d/1WsVxdmGY1lcudg6jMgsjBU8QPaDWOzp8/view?usp=sharing" target="_blank">Resume</a>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Navbar
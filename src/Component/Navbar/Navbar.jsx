import React from 'react'
import {Link} from 'react-router-dom'
import style from './navbar.module.css'
const Navbar = () => {
  return (
    <>
      <div className={style.navbar}>
      <div>
        <div className={style.navlinks}>
          <div className={style.navlink}>
          <p>00.</p>
          <Link className={style.link}  to={''}>About</Link>
          </div>
          <div className={style.navlink}>
          <p>01.</p>
          <Link className={style.link} to={''}>Work</Link>
          </div>
          <div className={style.navlink}>
          <p>02.</p>
          <Link className={style.link} to={''}>Contact</Link>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Navbar
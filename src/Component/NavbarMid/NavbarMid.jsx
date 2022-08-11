import React, { useRef } from 'react'
import style from "./navbarMid.module.css"
const NavbarMid = () => {
  const [isOpen, setIsOpen] = React.useState(false)
// make hamburger show when scrolled up anywhere
const nav = useRef(null);
const ham=useRef(null);
let lastScrollY = window.scrollY;
let currentScrollY = window.scrollY;
window.addEventListener("scroll", () => {


  if (lastScrollY>200 && lastScrollY < window.scrollY  ) {

    nav.current.className = style.hidden
  } else {
    nav.current.className = style.navbar
  }
  if(lastScrollY>100 && lastScrollY > window.scrollY){
    nav.current.className = style.blur+" "+style.navbar
  }
  lastScrollY = window.scrollY;
}
);
const onClickHandler = () => {
  if(ham.current.className==style.hamburger){
  ham.current.className = style.hamburger+" "+style.active
  setIsOpen(true)
}
else{
  ham.current.className = style.hamburger
  setIsOpen(false)
}

}
  return (
    <>
      <div className={style.navbar} ref={nav}>

      <div className={style.hamburger} ref={ham} onClick={onClickHandler} >
        <div className={style.hamburger__line} ></div>
        <div className={style.hamburger__line}></div>
        <div className={style.hamburger__line}></div>
      </div>
   
      </div>
     {isOpen? <div  className={style.drawer}>
   
      <div className={style.drawerinnerbox}>
      <a className={style.link} href="#about"
      onClick={onClickHandler}>
                About
              </a>
              <a className={style.link} href="#work" onClick={onClickHandler}>
                Work
              </a>
              <a className={style.link} href="#contact" onClick={onClickHandler}>
                Contact
              </a>
              <a
              onClick={onClickHandler}
                className={style.link}
                href="https://drive.google.com/drive/folders/1ecOBM_4_kdvirfOiSi5e9Oz3tqdjMzIX?usp=sharing"
                target="_blank"
              >
                Resume
              </a>
              </div>
      </div>
:null}

    </>
  )
}

export default NavbarMid
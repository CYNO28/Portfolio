import React, { useRef } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./navbar.module.css";
const Navbar = ({ scroller }) => {
  const nav = useRef(null);
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
 
  return (
    <>
      <div className={style.navbar} ref={nav}>
          <div className={style.logo}>
           <p>
             D
            </p>
          </div>
        <div>
          <div className={style.navlinks}>
            <div className={style.navlink}>
              <p>00.</p>
              <a className={style.link} href="#about">
                About
              </a>
            </div>
            <div className={style.navlink}>
              <p>01.</p>
              <a className={style.link} href="#work">
                Work
              </a>
            </div>
            <div className={style.navlink}>
              <p>02.</p>
              <a className={style.link} href="#contact">
                Contact
              </a>
            </div>
            <div className={style.navlink}>
              <p>03.</p>
              <a
                className={style.link}
                href="https://drive.google.com/drive/folders/1ecOBM_4_kdvirfOiSi5e9Oz3tqdjMzIX?usp=sharing"
                target="_blank"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

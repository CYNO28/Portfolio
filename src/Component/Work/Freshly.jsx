import React from 'react'
import { FiGithub } from 'react-icons/fi'
import { MdOutlineLiveTv } from 'react-icons/md'
import style from "./work.module.css";

const Freshly = () => {
  return (
    <div> 
    <div className={style.workcard}>
      <img src="/freshly.png" alt="" className={style.img} />
      <h2 className={style.title}>
        <a href="https://sparkling-kitten-532247.netlify.app/">Freshly</a>
      </h2>
      <p className={style.description}>
        A Frontend clone of food delivery website freshly.com.
      </p>
      <div className={style.icons}>
        <a
          href="https://github.com/CYNO28/Freshly"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub className={style.icon} />
        </a>
        <a
          href="https://sparkling-kitten-532247.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdOutlineLiveTv className={style.icon} />
        </a>
      </div>
  </div></div>
  )
}

export default Freshly
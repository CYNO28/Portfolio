import React from 'react'
import { FiGithub } from 'react-icons/fi'
import { MdOutlineLiveTv } from 'react-icons/md'
import style from "./work.module.css";
const Asos = () => {
  return (
    <div>
    <div className={style.workcard}>
      <img src="/kfc.png" alt="" className={style.img} />
      <h2 className={style.title}>
        <a href="https://stalwart-centaur-d742ce.netlify.app/">Asos</a>
      </h2>
      <p className={style.description}>
        A Frontend clone of Asos. using React and Redux.
      </p>
      <div className={style.icons}>
        <a
          href="https://github.com/CYNO28/ASOS"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub className={style.icon} />
        </a>
        <a
          href="https://stalwart-centaur-d742ce.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdOutlineLiveTv className={style.icon} />
        </a>
      </div>
    
  </div></div>
  )
}

export default Asos
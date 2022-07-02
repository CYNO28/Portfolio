import React from 'react'
import { FiGithub } from 'react-icons/fi'
import { MdOutlineLiveTv } from 'react-icons/md'
import style from "./work.module.css";
const Kfc = () => {
  return (
    <div>
    <div className={style.workcard}>
      <img src="/kfc.png" alt="" className={style.img} />
      <h2 className={style.title}>
        <a href="https://rococo-sunburst-64227a.netlify.app/">kfc</a>
      </h2>
      <p className={style.description}>
        A clone of food delivery website Kfc.com
      </p>
      <div className={style.icons}>
        <a
          href="https://github.com/CYNO28/kfc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub className={style.icon} />
        </a>
        <a
          href="https://rococo-sunburst-64227a.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdOutlineLiveTv className={style.icon} />
        </a>
      </div>
    
  </div></div>
  )
}

export default Kfc
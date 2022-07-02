import React from 'react'
import { FiGithub } from 'react-icons/fi'
import { MdOutlineLiveTv } from 'react-icons/md'
import style from './stylerev.module.css'
const NewTemplate = () => {
  return (
    <div style={{color:'white'}} className={style.container}>
        <div className={style.imgbox}>
            <img src="/kfc.png" alt="" className={style.img} />
        </div>
        <div className={style.detailbox}>
        <p className={style.fp}>
        Featured Project
        </p>
        <p className={style.projectname}>
        KFC
        </p>
        <div className={style.fillerbox}>
        <div className={style.desbox}>
          <p className={style.des}>
          A clone of food delivery website Kfc.com
          
          </p>
        </div>

        </div>
      <div className={style.techbox}>
    React | Redux | React-Router | Styled-Components  | Chakra-UI |
      </div>
      
      <div className={style.linkbox}>
        <a href="https://github.com/CYNO28/kfc" target="_blank">
        <FiGithub className={style.icon} />
          
        </a>
        <a href="https://rococo-sunburst-64227a.netlify.app/" target="_blank">
        <MdOutlineLiveTv className={style.icon} />
        </a>
        </div>
          </div>
    </div>
  )
}

export default NewTemplate
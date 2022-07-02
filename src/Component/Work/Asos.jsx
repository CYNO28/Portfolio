import React from 'react'
import { FiGithub } from 'react-icons/fi'
import { MdOutlineLiveTv } from 'react-icons/md'
import style from './style.module.css'
const NewTemplate = () => {
  return (
    <div style={{color:'white'}} className={style.container}>
        <div className={style.imgbox}>
            <img src="/asos.png" alt="" className={style.img} />
        </div>
        <div className={style.detailbox}>
        <p className={style.fp}>
        Featured Project
        </p>
        <p className={style.projectname}>
        Asos
        </p>
        <div className={style.fillerbox}>
        <div className={style.desbox}>
          <p className={style.des}>
          A Frontend clone of Asos.com using React and Redux.
          </p>
        </div>

        </div>
      <div className={style.techbox}>
    React | Redux | React-Router | Styled-Components  | Chakra-UI |
      </div>
      
      <div className={style.linkbox}>
        <a href="https://github.com/CYNO28/ASOS">
        <FiGithub className={style.icon} />
          
        </a>
        <a href="https://asos-one.vercel.app/">
        <MdOutlineLiveTv className={style.icon} />
        </a>
        </div>
          </div>
    </div>
  )
}

export default NewTemplate
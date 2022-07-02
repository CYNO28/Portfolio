import React from 'react'
import { FiGithub } from 'react-icons/fi'
import { MdOutlineLiveTv } from 'react-icons/md'
import style from './style.module.css'
const NewTemplate = () => {
  return (
    <div style={{color:'white'}} className={style.container}>
        <div className={style.imgbox}>
            <img src="/freshly.png" alt="" className={style.img} />
        </div>
        <div className={style.detailbox}>
        <p className={style.fp}>
        Featured Project
        </p>
        <p className={style.projectname}>
        Freshly
        </p>
        <div className={style.fillerbox}>
        <div className={style.desbox}>
          <p className={style.des}>
          A Frontend clone of food delivery website freshly.com.
          </p>
        </div>

        </div>
      <div className={style.techbox}>
    github 
      </div>
      
      <div className={style.linkbox}>
        <a href="">
        <FiGithub className={style.icon} />
          
        </a>
        <a href="">
        <MdOutlineLiveTv className={style.icon} />
        </a>
        </div>
          </div>
    </div>
  )
}

export default NewTemplate
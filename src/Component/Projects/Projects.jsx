import React, { useRef } from 'react'
import style from './project.module.css'

const Projects = () => {
 
  return (
    <div  className={style.wrapper}>
      <div className={style.container}>
     
        <div className={style.UpperTriangle}>
        </div>
        <div className={style.BottomTriangle}></div>
        <div className={style.LeftTriangle}></div>
        <div className={style.RightTriangle}></div>
        <div>
          <h1 style={{color:"white"}}>hello random stranger</h1>
          </div>
      </div>
      <div className={style.container}></div>
        
        
    </div>
  )
}

export default Projects
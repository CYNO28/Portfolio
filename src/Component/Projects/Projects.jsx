import React, { useRef } from 'react'
import style from './project.module.css'

const Projects = () => {
  const ref = useRef(null);
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      
    });
  });
  return (
    <div  className={style.wrapper}>
      <div className={style.container}>
        <div className={style.UpperTriangle} ref={ref}></div>
        <div className={style.BottomTriangle}></div>
        <div>
          <h1 style={{color:"white"}}>hello random strnager</h1>
          </div>
      </div>
      <div className={style.container}></div>
        
        
    </div>
  )
}

export default Projects
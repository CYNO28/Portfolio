import React from 'react'
import style from './about.module.css'
const About = () => {
  return (
    <div  className={style.container}>
      <div className={style.intro}>
      <p style={{fontSize:'1.5rem',letterSpacing:'.25rem'}}> Hi, my name is</p>
      <h1 className={style.name}> Dinesh Bisht</h1>
      <h1 className={style.introhead}> I build things for the web</h1>
      <p className={style.tagline}>
        I'm a full stack developer with a passion for building things that
        people love.
      </p>
      <button className={style.resumebtn}>
        Resume
      </button>

      </div>  
    </div>
  )
}

export default About
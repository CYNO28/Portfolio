import React from 'react'
import style from './Contactme.module.css'
const Contactme = () => {
  return (
    <div style={{color:"white"}} className={style.Contactme}>
        <h4>What's Next ?</h4>
        <h2>Get In Touch</h2>
    <button onClick={()=>{window.open("https://www.linkedin.com/in/dinesh-singh-95a887223/","_blank")}}>Say Hello</button>
    </div>
  )
}

export default Contactme
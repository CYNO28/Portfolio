import React from 'react'
import style from './Contactme.module.css'
const Contactme = () => {
  return (
    <div style={{color:"white"}} id="contact" className={style.Contactme}>
        <h4>What's Next ?</h4>
        <h2 className={style.getintouch}>Get In Touch</h2>
        <p className={style.para}>I’m  currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
    <button onClick={()=>{window.open("https://www.linkedin.com/in/dinesh-singh-95a887223/","_blank")}}>Say Hello</button>
    </div>
  )
}

export default Contactme
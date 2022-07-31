import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import style from './load.module.css'
const Loading = () => {
  // const navigate=useNavigate()
  // useEffect(()=>{
  //   setTimeout(()=>{
  //     navigate('/home')
  //   },3000)
  // })
  return (
     <div className={style.wrapper}> 
    <div>
      <img className={style.icon}  src="/Loading.gif" alt="" />
    </div>
    <div className={style.text}>
    <p>Introverts are like a slow website.<br></br>
      They might be the coolest site,
      but usually people don't wait that long for them 
      to open
    </p>
      </div>
    </div>
  )
}

export default Loading
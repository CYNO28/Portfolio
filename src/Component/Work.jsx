import React from 'react'
import style from './work.module.css'
import Workcard from './Workcard'
const Work = () => {
  return (
    <div className={style.container}>
        
            <Workcard/>
            <Workcard/>
            <Workcard/>
            <Workcard/>
        
        </div>
  )
}

export default Work
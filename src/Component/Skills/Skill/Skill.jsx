import React, { Children } from 'react'
import style from './skill.module.css'
const Skill = ({img_url,tag,Children}) => {
console.log(Children)
  return (
    <div className={style.part}>
      <div className={style.losange}>
      <div className={style.tag}>{tag}<br/> </div>
        <div className={style.los1}>
          <div className={style.img}>
          <img className={style.image} src={img_url} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skill
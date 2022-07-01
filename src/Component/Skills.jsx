import React from 'react'
import style from './skills.module.css'
const AboutMe = () => {
  return (
    <div className={style.container}>
<div class={style.skillsection}>
    {/* <h1 class={style.heading">}kills</h1> */}
    <div class={style.skillscontainer}>
        <div class={style.skillcard}>
            <img  src="/html.png" class={style.skillimg} alt=""/>
          
            <h1 class={style.skillname}>HTML</h1>
            {/* <p class={style.skillinfo}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, delectus!</p> */}
        </div>
        <div class={style.skillcard}>
            <img  src="/html.png" class={style.skillimg} alt=""/>
         
            <h1 class={style.skillname}>CSS</h1>
            {/* <p class={style.skillinfo}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, delectus!</p> */}
        </div>
        <div class={style.skillcard}>
            <img  src="/js.png" class={style.skillimg} alt=""/>
       
            <h1 class={style.skillname}>JAVASCRIPT</h1>
            {/* <p class={style.skillinfo}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, delectus!</p> */}
        </div>
        <div class={style.skillcard}>
            <img  src="/react.png" class={style.skillimg} alt=""/>
       
            <h1 class={style.skillname}>REACT</h1>
            {/* <p class={style.skillinfo}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, delectus!</p> */}
        </div>
        <div class={style.skillcard}>
            <img  src="/node.png" class={style.skillimg} alt=""/>
            <h1 class={style.skillname}>NODE</h1>
            {/* <p class={style.skillinfo}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, delectus!</p> */}
        </div>
        <div class={style.skillcard}>
            <img  src="/mongo.png" class={style.skillimg} alt=""/>
            <h1 class={style.skillname}>MONGODB</h1>
            {/* <p class={style.skillinfo}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, delectus!</p> */}
        </div>
        <div class={style.skillcard}>
            <img  src="/express.png" class={style.skillimg} alt=""/>
            <h1 class={style.skillname}>EXPRESS</h1>
            {/* <p class={style.skillinfo}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, delectus!</p> */}
        </div>
        
    </div>
</div>

    </div>
  )
}

export default AboutMe
import React from 'react'
import Project from './Project/Project'
import style from "./work.module.css"
const Work = () => {
    let project = [{
name: "Freshly",
img: "/project_img/freshly.png",
des:'This is a frontend clone of Freshly.com. Which is a food delivery company. We used html, css, javascript to bulid to this project.',
live_link: "",
github_link: ""
    }]
  return (
    <div className={style.wrapper}> 
    <h1>Projects
        <br />
    </h1>
    

        <div className={style.container}>
            <Project project={project[0]}/>
            <Project project={project[0]}/>
            <Project project={project[0]}/>
            <Project project={project[0]}/>
            <Project project={project[0]}/>
        </div>
    </div>
  )
}

export default Work
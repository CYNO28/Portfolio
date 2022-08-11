import React from 'react'
import Project from './Project/Project'
import style from "./work.module.css"
const Work = () => {
    let project = [{
name: "Freshly",
img: "/project_img/freshly.png",
des:'This is a frontend clone of Freshly.com. Which is a food delivery company. We used html, css, javascript to bulid to this project.',
live_link: "https://nimble-fudge-35bf79.netlify.app/",
github_link: "https://github.com/CYNO28/Freshly"
    },
{
name: "KFC",
img: "/project_img/kfc.png",
des:'This is a frontend clone of KFC.com. Which is a food delivery company. We used html, css, javascript to bulid to this project.',
live_link: "https://rococo-sunburst-64227a.netlify.app/",
github_link: "https://github.com/CYNO28/kfc"
},{
    name:'ASOS',
    img:"/project_img/asos.png",
    des:'This is a frontend clone of ASOS.com. Which is a fashion company. We used react, redux,react-router-dom, javascript to bulid to this project.',
    live_link:"https://stalwart-centaur-d742ce.netlify.app/",
    github_link:"https://github.com/CYNO28/ASOS"
},
{
    name:'Getharvest',
    img:"/project_img/harvest.png",
    des:'This is a frontend clone of GetHarvest.com. Which is a food delivery company. We used html, css, javascript to bulid to this project.',
    line_link:"https://frontend-seven-rho.vercel.app/",
    github_link:"https://github.com/CYNO28/-puny-potato-4945"
}
]
  return (
    <div className={style.wrapper} id="work"> 
    <h1 className={style.heading}>Projects
        <br />
    </h1>
    

        <div className={style.container}>
            <Project project={project[0]}/>
             <Project project={project[1]}/> 
                 <Project project={project[2]}/>
             <Project project={project[3]}/> 
        </div>
    </div>
  )
}

export default Work
import React from "react";

import style from "./project.module.css";

const Projects = () => {
  const [bol,setbol] = React.useState(false);
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.UpperTriangle} style={bol?{animation: `${style.goup} 2s ease-in-out`}:{}}></div>
        <div className={style.BottomTriangle} style={bol?{animation: `${style.godown} 2s ease-in-out`}:{}} ></div>
        <div className={style.LeftTriangle}   style={bol?{animation: `${style.goleft} 2s ease-in-out`}:{}}></div>
        <div className={style.RightTriangle}  style={bol?{animation: `${style.goright} 2s ease-in-out`}:{}}></div>
        <div>
          <h1 style={{ color: "white" }} onClick={()=>{setbol(!bol)
         
          }}> hello random stranger</h1>
        </div>
      </div>
      <div className={style.container}>

      </div>
    </div>
  );
};

export default Projects;

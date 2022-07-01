import React from "react";
import style from "./skills.module.css";
import { ImHtmlFive } from "react-icons/im";
import { DiMongodb } from "react-icons/di";
import { SiExpress, SiJavascript, SiThreedotjs } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { GrNode } from "react-icons/gr";
import { IoLogoCss3 } from "react-icons/io";
const AboutMe = () => {
  const ref = React.useRef();
  // add class active when scroll to element
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (ref.current.classList.contains("active")) {
      } else if (
        window.scrollY >
        ref.current.offsetTop - window.innerHeight / 2
      ) {
        ref.current.classList.add("active");
        console.log("active");
      }
    });
  });
  return (
    <div className={style.container} ref={ref}>
      <h1 className={style.heading} > What I Do.... </h1>
    
  <div className={style.grid}>
      <div>
      <IoLogoCss3 className={style.skill} style={{color:'#c49512'}}/>
      </div>
      <div>
      <ImHtmlFive className={style.skill} style={{color:'cyan'}}/>
      </div>
      <div>
      <SiJavascript className={style.skill} style={{color:'#c49512'}} />
      </div>
   

      <div>
      <DiMongodb className={style.skill} style={{color:'#4db33d'}} />
      </div>
      <div>
      <GrReactjs className={style.skill} style={{color:'#61DBFB'}} />
      </div>
      <div>
      <SiExpress className={style.skill} style={{color:'rgb(56, 59, 61)'}} />
      </div>
      <div>
      <GrNode className={style.skill} style={{color:'#68a063'}} />
      </div>
      <div>
      <SiThreedotjs className={style.skill} style={{color:'#ccc'}}/>
      </div>
      </div>
    </div>

  );
};

export default AboutMe;

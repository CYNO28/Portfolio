import React from "react";
import { FiGithub } from "react-icons/fi";
import { MdOutlineLiveTv } from "react-icons/md";
import Asos from "./Asos";
import Freshly from "./Freshly";
import Kfc from "./Kfc";
import style from "./work.module.css";

const Work = () => {
  return (
    <div className={style.container} id='work'>
      <h1 className={style.heading}>
        Some Things I've <br /> Built...
      </h1>
      <div className={style.grid}>
     <Freshly/>

     <Kfc/>
     <Asos/>
    </div>
    </div>
  );
};

export default Work;

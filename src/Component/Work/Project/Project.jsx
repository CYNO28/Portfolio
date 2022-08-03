import React from "react";
import style from "./project.module.css";
import { DiGithubFull } from "react-icons/di";
import {AiOutlineLink} from "react-icons/ai";
const Project = ({ project }) => {
  return (
    <div className={style.container}>
      <img src={project.img} alt="" />
      <h2>{project.name}</h2>
      <p>{project.des}</p>
      <div className={style.links}>
        <a href={project.live_link}>
        <AiOutlineLink/>
        </a>
        <a href={project.github_link}>
          <DiGithubFull />
        </a>
        </div>
    </div>
  );
};

export default Project;

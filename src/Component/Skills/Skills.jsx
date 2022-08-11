import React from "react";
import { useRef } from "react";
import Greybox from "./Helper/Greybox";
import Skill from "./Skill/Skill";
import style from "./skills.module.css";

import Info from "./Info/Info";
const Skills = () => {
  const ref = useRef(null);
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > ref.current.offsetTop - window.innerHeight / 2) {
        ref.current.classList.add("active");
        let div = ref.current.querySelectorAll("div");
        for (let i = 0; i < div.length; i++) {
          if (div[i].classList.contains(style.skill_6)) {
            div[i].classList.add(style.rise_slow);
          }
          if (
            div[i].classList.contains(style.skill_5) ||
            div[i].classList.contains(style.skill_3) ||
            div[i].classList.contains(style.skill_1)
          ) {
            div[i].classList.add(style.rise_slow1);
          }
          if (
            div[i].classList.contains(style.skill_4) ||
            div[i].classList.contains(style.skill_2)
          ) {
            div[i].classList.add(style.rise_slow2);
          }
        }
      }
    });
  });

  return (
    <div className={style.Container}>
      <h1 className={style.skillheading}>Skills i have...</h1>
      <div className={style.skillbox}>
        <div className={style.container} ref={ref}>
          <div className={style.whitebox}></div>
          <div className={style.greybox}>
            <Greybox />
          </div>
          <div className={style.greybox1}>
            <Greybox />
          </div>
          <div className={style.greybox2}>
            <Greybox />
          </div>
          <div className={style.greybox3}>
            <Greybox />
          </div>
          <div className={style.skill_1}>
            <Skill img_url={"/Icon/mongo.png"} tag={"Mongo"} />
          </div>
          <div className={style.skill_2}>
            <Skill img_url={"/Icon/express.png"} tag={"Express"} />
          </div>
          <div className={style.skill_3}>
            <Skill img_url={"/Icon/react.png"} tag={"React"} />
          </div>
          <div className={style.skill_4}>
            <Skill img_url={"/Icon/node.png"} tag={"Node"} />
          </div>
          <div className={style.skill_5}>
            <Skill img_url={"/Icon/typescript.png"} tag={"Typescrip"} />
          </div>
          <div className={style.skill_6}>
            <Skill img_url={"/Icon/javascript.png"} tag={"Javascript"}></Skill>
          </div>
        </div>
        <Info/>
      </div>
      <div className={style.infocontainer}></div>
    </div>
  );
};

export default Skills;

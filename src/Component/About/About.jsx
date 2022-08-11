import React from "react";
import Modal from "./3D/Modal";
import style from "./about.module.css";
const About = () => {
  return (
    <div className={style.flexbox}>
    <div className={style.container} id="about">
      <div className={style.intro}>
        <p className={style.introp}> Hi, my name is</p>
        <h1 className={style.name}> Dinesh Bisht</h1>
        <h1 className={style.introhead}> I build things for the web.</h1>
        <p className={style.tagline}>
          I'm a full stack developer with a passion for building things that
          people love.
        </p>
      </div>
      
    </div>
    <div className={style.canvas}>
      <Modal />
      </div>
    </div>
  );
};

export default About;

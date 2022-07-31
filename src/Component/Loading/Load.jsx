import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import style from "./load.module.css";
const Loading = () => {
  const navigate=useNavigate()
  useEffect(()=>{
    setTimeout(()=>{
      navigate('/home')
    },6000)
  })
  return (
    <div className={style.wrapper}>
      <div>
        <img className={style.icon} src="/Loading.gif" alt="" />
      </div>
      <div className={style.text}>
        <p className={style.clrtext}>Introverts are like a slow website.</p>
        <p className={style.nrtext}>
          They might be the coolest site,
          <br></br> but usually people <br></br>don't wait that
          long for them to open
        </p>
        <p className={style.clrtext} style={{marginLeft:"20%",marginTop:"1rem"}}>Extroverts are like Popups</p>
      </div>
    </div>
  );
  
};

export default Loading;

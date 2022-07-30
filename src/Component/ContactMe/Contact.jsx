import React from "react";
import style from "./contact.module.css";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { CgPhone } from "react-icons/cg";
const Contact = () => {
  return (
    <>
      <div className={style.wrapper}>
        <div className={style.container}>
          <h1>Get in Touch</h1>
          <p>Fill the details to reach me.</p>
          <div className={style.box}>
            <div className={style.leftbox}>
              <input type="text" placeholder="Full Name" />
              <input type="text" placeholder="Email" />
              <textarea
              className={style.textarea}
                name=""
                id=""
                cols="30"
                rows="10"
                
                placeholder="Message"
              ></textarea>
              <button>Submit</button>
            </div>
            <div className={style.rightbox}>
              <img src="/img/Layer0.png" alt="" />
              <p>
                <MdLocationOn className={style.icon}></MdLocationOn>
                <span>Baret Bageshwar Uttrakhand 263642</span>
              </p>
              <p>
                <CgPhone className={style.icon}></CgPhone>
                <span>+91 952-812-9529</span>
              </p>
              <p>
                <MdEmail className={style.icon}></MdEmail>
                <span>dineshsing9582@gmail.com</span>
              </p>
            </div>

            <div className={style.socialicon}>
              <a target="_blank" href="">
                <FaFacebookF  className={style.sicon}></FaFacebookF>
              </a>
              <a target="_blank" href="">
                <BsGithub className={style.sicon}></BsGithub>
              </a>
              <a target="_blank" href="">
                <FaLinkedinIn className={style.sicon}></FaLinkedinIn>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={style.backgroundC}></div>
    </>
  );
};

export default Contact;

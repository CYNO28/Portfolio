import React from "react";
import style from "./contact.module.css";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { CgPhone } from "react-icons/cg";
import axios from "axios";
const Contact = () => {
  const [state, setState] = React.useState({
    name: "",
    email: "",
    message: "",
  })
  function onchange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }
 async function onsubmit(e) {
  
    e.preventDefault();
    const { name, email, message } = state;
    const data = {
      name,
      email,
      message,
    };
    
    let r= await axios.post("https://portfoliocyno.herokuapp.com/sendemail", data)
    console.log(r)


  }
  return (
    <>
      <div className={style.wrapper}>
        <div className={style.container}>
          <h1>Get in Touch</h1>
          <p>Fill the details to reach me.</p>
          <div className={style.box}>
            <div className={style.leftbox}>
              <input type="text" name="name" onChange={onchange} placeholder="Full Name"  />
              <input type="text" name="email" onChange={onchange} placeholder="Email" />
              <textarea

              className={style.textarea}
                name="message"
                id=""
                onChange={onchange}
                cols="30"
                rows="10"
                
                placeholder="Message"
              ></textarea>
              <button onClick={onsubmit}>Submit</button>
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

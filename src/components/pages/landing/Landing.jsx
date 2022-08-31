import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import "./landing.css";


const LandingPage = () => {
  return(
    <div className="golem-landing">
      <div className="landing-text-container" data-aos="fade-right">
        <h1 className="title">GolemSec</h1>
        <h2 className="subtitle">Services et créations web</h2>
      </div>
      <div className="icon-container" data-aos="zoom-out">
          <img className="icon"src={require("../../../images/logo/GolemL.png")} alt="GolemSec" />
      </div>
    </div>
  )
}

AOS.init();

export default LandingPage;
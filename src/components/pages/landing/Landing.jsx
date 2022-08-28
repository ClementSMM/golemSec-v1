import React from "react";
import "./landing.css";

const LandingPage = () => {
  return(
    <div className="golem-landing">
      <div className="landing-text-container">
        <h1 className="title">GolemSec</h1>
        <h2 className="subtitle">Services et créations web</h2>
        <p className="text"></p>
      </div>
      <div className="icon-container">
          <img className="icon"src={require("../../../images/logo/GolemL.png")} alt="GolemSec" />
      </div>
    </div>
  )
}

export default LandingPage;
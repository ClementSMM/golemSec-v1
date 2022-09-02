import React from "react";

import "./about.css"

const About = () => {

  return(
    <div id="about" className="golem-about">
      <div className="about-text-container" data-aos="fade-left" >
        <div className="main-txt">
          <div className="main-txt-title">
            <h1>securite et anonimat</h1>
          </div>
          <div className="main-txt-sub">
            <p>
              De l’esprit de ces acteurs (hommes de lois, experts en informatique, en crypto-monnaie) Golem Sec est née. <br /> 
            </p>
            <p>
              La volonté première et principale de notre société est de préserver l’anonymat et l’intégrité de tous sur les réseaux internet comme dans la vie privée. Nous nous engageons à vous proposer des services totalement sécurisés et sur-mesure. <br /> 
            </p>
            <p>
              Un suivi rigoureux, complet et personnalisé est alors effectué sur vos projets.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
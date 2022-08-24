import React from "react";
import CardComponent from "../../layout/card/Card.jsx"

import "./about.css"

const About = () => {

  const cards = [
    {
      title: "zizi 1",
      text: "caca 1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      title: "zizi 2",
      text: "caca2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      title: "zizi 3",
      text: "caca 3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    }
  ]
  return(
    <div className="golem-about">
      <div className="img-container">
        <img className="image" src={require('../../../images/neon2.png')} alt=""/>
      </div>
      <div className="about-text-container">
        <div className="main-txt">
          <div className="main-txt-title">
            <h1>Des services web sur mesure</h1>
          </div>
          <div className="main-txt-sub">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and</p>
          </div>
        </div>
        <div className="card-main">
          {/* {cards.map(card => {
            <CardComponent 
              title={card.title}
              text={card.text}
            />
          })} */}
          <div className="card-title">
            <h3>bababab</h3>
          </div>
          <div className="card-txt">
            <p>vfnjeomnveznfoire</p>
          </div>
        </div>
        <div className="card-main">
          <div className="card-title">
            <h3>bababab</h3>
          </div>
          <div className="card-txt">
            <p>vfnjeomnveznfoire</p>
          </div>
        </div>
        <div className="card-main">
          <div className="card-title">
            <h3>bababab</h3>
          </div>
          <div className="card-txt">
            <p>vfnjeomnveznfoire</p>
          </div>
        </div>
        
      </div>
      
    </div>
  )
}

export default About;
import React from "react";

import "./services.css"

const Services = () => {

  return (
    <div id="service" className="golem-services">
      
      <div className="service-cards-container">
        <div className="service-card1-main">
          <div className="title-service-card">
            <h2>Site web</h2>
          </div>
          <div className="text-service-card">
            <p>1Lorem Ipsum is simply dummy text of the printing and typesetting industry.1Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </div> 

        <div className="service-card2-main">
          <div className="title-service-card">
            <h2>Opsec</h2>
          </div>
          <div className="text-service-card">
            <p>sum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </div> 

        <div className="service-card3-main">
          <div className="title-service-card">
            <h2>Optimisation</h2>
          </div>
          <div className="text-service-card">
            <p>1Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </div> 
        
        <img src={require('../../../images/illustration/server.jpg')} alt="" className="server-img-container" />
        
      </div>


      
    </div>
  )
}

export default Services;
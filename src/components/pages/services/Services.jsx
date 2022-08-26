import React from "react";

import "./services.css"

const Services = () => {

/*   const textCards = [
    {
      title: "Service 1",
      text: "1Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      title: "Service 2",
      text: "2Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      title: "Service 3",
      text: "3Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    }
  ]; */


/*   const ServiceCard = (textCards) => {
    return (
      textCards.map(element => {
        <div className="service-card-main">
          <div className="title-service-card">
            <h2>{element.title}</h2>
          </div>
          <div className="text-service-card">
            <p>{element.text}</p>
          </div>
        </div>
      })

    )
  } */

  return (
    <div className="golem-services">
      
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
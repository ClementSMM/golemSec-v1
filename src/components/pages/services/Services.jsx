import React from "react";

import "./services.css"

const Services = () => {

  return (
    <div id="service" className="golem-services">
      
      <div className="service-cards-container">
        <div className="service-card1-main" data-aos="flip-up" >
          <div className="title-service-card">
            <h2>Web</h2>
          </div>
          <div className="text-service-card" >
            <p>Golemsec vous propose grâce à c’est programmeurs certifier un accompagnement sur mesure pour toute création de site internet (vitrine, e -commerce, association) mais aussi pour le développement d’application . Avec nos compétences en JavaScript , Ruby , Php votre projet sera de là meilleur des qualités .</p>
          </div>
        </div> 

        <div className="service-card2-main" data-aos="flip-up">
          <div className="title-service-card">
            <h2>Opsec</h2>
          </div>
          <div className="text-service-card">
            <p>Golemsec vous accompagne dans la sécurisation de vos appareils personnel et professionnel avec nos conseil en opsec sécurité . Nous proposons des formations et des produits cryptées pour particulier et pour les entreprises . Reprenez le contrôle de vos données et de votre vie privée grâce à nos conseil en opsec .</p>
          </div>
        </div> 

        <div className="service-card3-main" data-aos="flip-up">
          <div className="title-service-card">
            <h2>Trafic et SEO</h2>
          </div>
          <div className="text-service-card">
            <p>Golemsec dispose d’un service rare d’optimisation de visibilité et de référencement de votre site web, grâce à Golemsec votre site gagnera en visibilité et en clientèle grâce à nos compétences de dynamisation .</p>
          </div>
        </div> 
        
        <img src={require('../../../images/illustration/server.jpg')} alt="" className="server-img-container" />
        
      </div>


      
    </div>
  )
}

export default Services;
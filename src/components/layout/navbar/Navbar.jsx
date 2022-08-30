import React from "react";
import "./navbar.css";

const LandingPage = () => {
  return(
    <header>
      <div className="wrapHead">
        <div>
          <img id="brand" src={require('../../../images/logo/GolemM.png')} alt='logo'/>
        </div>
        <div className="link">
          <nav>
            <ul>
              <li><a href="#about" className="scroll">À Propos</a></li>
              <li><a href="#service" className="scroll">Service</a></li>
              <li><a href="#contact" className="scroll">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div> 
    </header>
  )
}
export default LandingPage;
import React from "react";
import "./navbar.css";

const LandingPage = () => {
  return(
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <img id="brand" src={require('../../../images/logo/GolemM.png')} alt='logo'/>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#about">À Propos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#service">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}
export default LandingPage;
   



/*  <header>
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
    </header> */
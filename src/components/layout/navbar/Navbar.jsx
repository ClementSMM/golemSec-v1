import React from "react";
import "./navbar.css";

const NavBar = () => {
  return(
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <img id="brand" src={require('../../../images/logo/golemM.png')} alt='logo'/>
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
export default NavBar;
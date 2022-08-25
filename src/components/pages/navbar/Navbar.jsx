import React from "react";
import "./navbar.css";

const LandingPage = () => {
  return(
<header>
  <div class="wrapHead">
    <div id="brand">
    </div>
    <div class="link">
    <nav>
      <ul>
        <li><a href="#about" class="scroll">À Propos</a></li>
        <li><a href="#service" class="scroll">Service</a></li>
        <li><a href="#pricing" class="scroll">Devis</a></li>
        <li><a href="#contact" class="scroll">Contact</a></li>
      </ul>
    </nav>
    </div>
  </div>
</header>
  )
}
export default LandingPage;
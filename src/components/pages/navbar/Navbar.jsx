import React from "react";
import "./navbar.css";

const LandingPage = () => {
  return(
<header>
  <div class="wrapHead">
    <div id="brand">
      <h1>GolemSec</h1>
    </div>
    <nav>
      <ul>
        <li><a href="#about" class="scroll">A Propos</a></li>
        <li><a href="#service" class="scroll">Service</a></li>
        <li><a href="#pricing" class="scroll">Devis</a></li>
        <li><a href="#contact" class="scroll">Contact</a></li>
      </ul>
    </nav>
  </div>
</header>
  )
}
export default LandingPage;
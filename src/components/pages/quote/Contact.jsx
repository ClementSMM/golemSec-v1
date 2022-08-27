import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

import "./contact.css"

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_u115len', 'template_x84w94l', form.current, 'pkPN2TsI1vQnjaUwS')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    // e.target.reset();
  };

  return (
    <div className="golem-contact">
      <div className="contact-form-container">
        <form ref={form} onSubmit={sendEmail} className="contact-form-main">

          <div className="input-form">
            <label>Nom</label>
            <input type="text" name="user_last_name" className="input-name" />
          </div>

          <div className="input-form">
            <label>Prénom</label>
            <input type="text" name="user_first_name" className="input-name" />
          </div>

          <div className="input-form">
            <label>Email</label>
            <input type="email" name="user_email" required/>
          </div>

          <div className="input-form">
            <label>Telephone</label>
            <input type="tel" id="phone" name="user_phone" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
          </div>

          <div className="input-form">
            <label>Status</label>
            <select name="user_status" id="pet-select">
              <option value="">Choisissez votre status</option>
              <option value="Entreprise">Entreprise</option>
              <option value="Particulier">Particulier</option>
            </select>
          </div>

          <div className="input-form">
            <label>Nom de l'entreprise</label>
            <input type="user_corp" name="user_email" />
          </div>

          <div className="input-form">
            <label>Services</label>
            <select name="user_service" id="user_service" required>
              <option value="">Service souhaité</option>
              <option value="site vitrine">Site vitrine</option>
              <option value="site e-commerce">Site e-commerce</option>
              <option value="webApp">Application web</option>
              <option value="design">Design de site web</option>
            </select>
          </div>
          
          <div className="input-form">
            <labels>Methode de contact</labels>
            <select name="contact_method" id="contact_methode" required>
              <option value="">selectionner</option>
              <option value="telephone">Telephone</option>
              <option value="mail">Mail</option>
            </select>
          </div>

          <div className="input-form">
            <labels>Comment nous avez vous connus ?</labels>
            <select name="discover_method" id="discover_method" required>
              <option value="">Selectionner</option>
              <option value="Bouche à oreille">Bouche à oreille</option>
              <option value="internet">Internet</option>
              <option value="recommandation">Recommandation</option>
            </select>
          </div>
          
          <div className="input-form">
            <label>Message</label>
            <input type="user_message" name="user_message" />
          </div>

          <div>
            <input type="submit" value="Send" />
          </div>
        </form>
      </div>


      <div className="contact-txt-container">
        <p>vnfdhjknv</p>
      </div>
    </div> 
  );
};

export default Contact
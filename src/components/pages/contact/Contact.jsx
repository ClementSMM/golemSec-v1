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

    e.target.reset();
  };

  return (
    <div id="contact"className="golem-contact">
      <div className="contact-form-container" data-aos="slide-up">
        <form ref={form} onSubmit={sendEmail} className="contact-form-main">

          <div className="input-form">
            <label className="label-form">Nom</label>
            <input type="text" name="user_last_name" className="input" required/>
          </div>

          <div className="input-form">
            <label className="label-form">Prénom</label>
            <input type="text" name="user_first_name" className="input" required/>
          </div>

          <div className="input-form">
            <label className="label-form">Email</label>
            <input type="email" name="user_email" className="input" required/>
          </div>

          <div className="input-form">
            <label className="label-form">Telephone</label>
            <input type="tel" id="phone" name="user_phone" className="input" placeholder="" />
          </div>

          <div className="input-form">
            <label className="label-form">Status</label>
            <select name="user_status" id="pet-select" className="input" required>
              <option value="">Choisissez votre status</option>
              <option value="Entreprise">Entreprise</option>
              <option value="Particulier">Particulier</option>
            </select>
          </div>

          <div className="input-form">
            <label className="label-form">Nom de l'entreprise</label>
            <input type="user_corp" name="user_email" className="input" required/>
          </div>

          <div className="input-form">
            <label className="label-form">Services</label>
            <select name="user_service" id="user_service" className="input" required>
              <option value="">Service souhaité</option>
              <option value="site vitrine">Site vitrine</option>
              <option value="site e-commerce">Site e-commerce</option>
              <option value="webApp">Application web</option>
              <option value="design">Design de site web</option>
            </select>
          </div>
          
          <div className="input-form">
            <labels className="label-form">Methode de contact</labels>
            <select name="contact_method" id="contact_methode" className="input" required>
              <option value="">selectionner</option>
              <option value="telephone">Telephone</option>
              <option value="mail">Mail</option>
            </select>
          </div>

          <div className="input-form">
            <labels className="label-form">Comment nous avez vous connus ?</labels>
            <select name="discover_method" id="discover_method" className="input" required>
              <option value="">Selectionner</option>
              <option value="Bouche à oreille">Bouche à oreille</option>
              <option value="internet">Internet</option>
              <option value="recommandation">Recommandation</option>
            </select>
          </div>
          
          <div className="input-text-form">
            <label className="label-form">Message</label>
            <textarea  type="user_message" name="user_message" className="input-text"/>
          </div>

          <div className="form-submit">
            <input type="submit" value="Send" className="submit" />
          </div>
        </form>
      </div>
      

      <div className="contact-txt-container" data-aos="fade-left">
        <p>vnfdhjknv</p>
      </div>
    </div> 
  );
};

export default Contact
import React from "react";
import "./Footer.css";
import logo_big from "../../assets/logo_big.png";
import instagram_icon from "../../assets/instagram_icon.png";
import pintester_icon from "../../assets/pintester_icon.png";
import whatsapp_icon from "../../assets/whatsapp_icon.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-contact ">
        <div id="contactInfo">
          <h2>Contact : </h2>
          <div class="info-group">
            <div class="info-label">Email:</div>
            <div class="info-value">example@example.com</div>
          </div>
          <div class="info-group">
            <div class="info-label">Telephone:</div>
            <div class="info-value">+1234567890</div>
          </div>
          <div class="info-group">
            <div class="info-label">Address:</div>
            <div class="info-value">123 Street Name, City, Country</div>
          </div>

          <div className="footer-social-icon">
          <div className="footer-icon-container">
            <img src={instagram_icon} alt="" />
          </div>
          <div className="footer-icon-container">
            <img src={pintester_icon} alt="" />
          </div>
          <div className="footer-icon-container">
            <img src={whatsapp_icon} alt="" />
          </div>
        </div> 
        </div>

       
      </div>

      <div className="footer-copyright">
        <hr />
        <p> Copyright @ 2024 all Right Reserved. </p>
      </div>
    </div>
  );
};

export default Footer;


import React from 'react';
import '../styles/contact.css'; 
const contact = () => {
  return (
   

    <div className="contact-container">
      <h2>Contact Us</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Your name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Your email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" placeholder="Your message"></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}


 
export default contact
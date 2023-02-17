import React from "react";
import "../styles/contact.css";

function Contact() {
  return (
    <section className="contact-container">
      <div className="contact-image"></div>
      <div className="contact-text-container">
        <div>
          <h2 className="contact-text-header">Contact</h2>
          <h2 className="contact-text-header">Information</h2>
        </div>
        <div className="contact-text">
          <p>Phone / Mobile Number</p>
          <p>123-456-7890</p>
        </div>
        <div className="contact-text">
          <p>Address</p>
          <p>23 Albert Street, Paris, France</p>
        </div>
        <div className="contact-text">
          <p>E-mail Address</p>
          <p>hello@canele-bakery.com</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;

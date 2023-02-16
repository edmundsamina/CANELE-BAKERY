import React from 'react'

function Footer() {
  return (
    <footer>
      <div className="footer-item">
        <p className='footer-heading'>Find us here</p>
        <p className='footer-email'>hello@matrecanelle.com</p>
      </div>

      <div className="footer-location footer-item">
        <div className="footer-address">
          <p>23 Albert St.</p>
          <p>Paris</p>
          <p>France</p>
        </div>
        <div className="footer-phone">
          <p>123-456-7890</p>
        </div>
      </div>
      <div className="socials footer-item">
        <img></img>
        <img></img>
        <img></img>
      </div>
    </footer>
  );
}

export default Footer
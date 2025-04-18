import React from 'react';
import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Thoughts On Ball ( ⚽️ ). All rights reserved.</p>
        <p>Designed by Madhwesh</p>
      </div>
    </footer>
  );
};

export default Footer;

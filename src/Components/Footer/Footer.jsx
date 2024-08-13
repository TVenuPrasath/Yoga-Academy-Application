import React from 'react';
import './Footer.css';
import { useNavigate } from 'react-router-dom';

function Footer() {

  const navigate=useNavigate();

  return (
    <div className="footer">
      <div className="footer-section footer-quick-links">
        <h1>Quick Links</h1>
        <ul>
          <li><button className="quickbutton">Yoga Classes</button></li>
          <li><button className="quickbutton" onClick={()=>navigate('/About')}>About</button></li>
          <li><button className="quickbutton">Courses & Training</button></li>
          <li><button className="quickbutton">Blog</button></li>
        </ul>
      </div>
      <div className="footer-section footer-information">
        <h1>Information</h1>
        <ul>
          <li><button className="infobutton" onClick={()=>navigate('/Signin')}>Login & Register</button></li>
          <li><button className="infobutton" onClick={()=>navigate('/About')}>Why Choose Us</button></li>
          <li><button className="infobutton" onClick={()=>navigate('/Terms&Conditions')}>Terms & Conditions</button></li>
          <li><button className="infobutton" onClick={()=>navigate('/PrivacyPolicy')}>Privacy Policy</button></li>
          <li><button className="infobutton" onClick={()=>navigate('/Refund')}>Refund & Cancellation Policy</button></li>
        </ul>
      </div>
      <div className="footer-section footer-contact">
        <h1>Contact Us</h1>
        <address>
          YogaAcademy@gmail.com<br />
          +91 892 812 6174<br />
          No. 24, Temple Street,Mylapore, Chennai,Tamil Nadu - 600004,India<br />
        </address>
      </div>
      <div className="footer-section footer-bottom">
        © Copyright 2024 -YogaAcademy
      </div>
    </div>
  );
}

export default Footer;


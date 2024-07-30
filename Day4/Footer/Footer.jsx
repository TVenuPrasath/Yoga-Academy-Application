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
          shyamsunderbiyani24@gmail.com<br />
          +91 892 812 6174<br />
          Patanjalee Shyambhai Inst of Yoga & Therapy<br />
          A1003, Sanghvi S3 Eco City, Mahajan Wadi, Mira Road East Thane 401107
        </address>
      </div>
      <div className="footer-section footer-bottom">
        © Copyright 2024 - Patanjalee Shyambhai Inst. of Yoga & Therapy
      </div>
    </div>
  );
}

export default Footer;


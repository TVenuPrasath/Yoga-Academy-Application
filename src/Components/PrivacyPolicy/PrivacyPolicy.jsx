import React from 'react';
import './PrivacyPolicy.css';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const PrivacyPolicy = () => {
  return (
    <div>
        <Navbar/>
    <div className="privacy-container">
      <h1>Privacy Policy</h1>
      
      <ol start="1">
        <li>
          We collect personal information from you, including information about your:
          <ul>
            <li>Name</li>
            <li>Mobile number</li>
            <li>Billing or purchase information</li>
            <li>Birth date</li>
            <li>Email</li>
          </ul>
        </li>
        <li>
          I grant Alma Studio permission to photograph and/or videotape myself while on the premises, these images may be used in advertising or marketing campaigns on Alma’s website, and for promotional and informational material including, but not limited to, website, social media, flyers, brochures, emails, advertisements, newspaper articles, TV, or cable interviews/promotions. I understand I will not be identified by name unless I give my permission, I hereby waive and release any rights to compensation for, or ownership of, such images.
        </li>
        <li>
          We collect your personal information in order to provide our services. We keep your information safe by encrypting credit card numbers using industry standard technology.
        </li>
      </ol>
    </div>
        <Footer/>
    </div>
  );
};

export default PrivacyPolicy;

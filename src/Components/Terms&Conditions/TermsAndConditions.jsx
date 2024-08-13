import React from 'react';
import './TermsAndConditions.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const TermsAndConditions = () => {
  return (
    <div>
      <Navbar/>
    <div className="terms-container">
      <h1>Terms and Conditions</h1>
      
      <h2>General</h2>
      <ol>
        <li>
          This website is owned and operated by Alma Studio. These are the terms under which you may use our website, App, and services as offered by us at our premises. This website and our App offers visitors information about our services, the ability to purchase services, the ability to book into our classes and other offerings, and a method of checking in on your own schedule and bookings. By accessing or using the website, App, or our services at our premises, you approve that you have read, understood, and agree to be bound by these Terms and Conditions.
        </li>
        <li>
          In order to use our website, App, and/or purchase our services, you must be at least 18 years of age, and possess the legal authority, right and freedom to enter into these Terms and Conditions as a binding Agreement.
        </li>
      </ol>
      
      <h2>Classes and Memberships</h2>
      <ol start="3">
        <li>
          You must complete the Waiver of Liability (Liability Waiver). You will not be permitted access to our premises unless you have completed the Liability Waiver.
        </li>
        <li>
        Class Purchases or Membership allow you access to our Premises subject to the terms of this Agreement, our Rules or any other rules or policies pertaining to your Membership that we may introduce from time to time. We reserve the right to change, alter, withdraw or adapt any facilities, equipment, timetables, services, Rules and policies within the studio at any time.
        </li>
        <li>
        Your Class Purchases or Membership applies to you personally. You cannot allow any other person to use your Membership. You must not bring, invite or aid a non-paying person to access our Premises. 
        </li>
        <li>
        We reserve the right to review your Class Purchases or Membership to ensure compliance with our policies prior to acceptance of your Membership.
        </li>
      </ol>
    </div>
    <Footer/>
    </div>
  );
};

export default TermsAndConditions;

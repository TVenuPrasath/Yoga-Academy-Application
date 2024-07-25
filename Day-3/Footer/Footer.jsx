// import React from 'react'
// import './Footer.css';
// function Footer() {
//   return (
//     <div className='footer'>
//         <div className='footer1'>
//             <h1>Quick Links</h1>
//             <ul><button className='quickbutton'>Home</button></ul>
//             <ul><button className='quickbutton'>About us</button></ul>
//             <ul><button className='quickbutton'>Contact us</button></ul>
//             <ul><button className='quickbutton'>Blog</button></ul>
            
//         </div>
//         <div className='footer2'>
//           <h1>Contact us</h1>
//           <address>shyamsunderbiyani24@gmail.com  
//           +91 892 812 6174
//           Patanjalee Shyambhai Inst of Yoga & Therapy
//           A1003, Sanghvi S3 Eco City, Mahajan Wadi, Mira Road East Thane 401107</address>
//         </div>
//         <div className='footer3'>
//         <h1>Information</h1>
//             <ul><button className='quickbutton'>Why Choose us?</button></ul>
//             <ul><button className='quickbutton'>Terms & Conditions</button></ul>
//             <ul><button className='quickbutton'>Privay Policy</button></ul>
//             <ul><button className='quickbutton'>Refund and Cancellation Policy</button></ul>
//         </div>
//         {/* <div className='lastfooter'>
//         © Copyright 2024 - Patanjalee Shyambhai Inst. of Yoga & therapy
//         </div> */}

//     </div>
//   )
// }

// export default Footer

import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-section footer-quick-links">
        <h1>Quick Links</h1>
        <ul>
          <li><button className="quickbutton">Online Yoga Classes</button></li>
          <li><button className="quickbutton">Yoga Classes</button></li>
          <li><button className="quickbutton">Yoga Therapy</button></li>
          <li><button className="quickbutton">Courses & Training</button></li>
          <li><button className="quickbutton">Yoga Retreat</button></li>
          <li><button className="quickbutton">Shloka Classes</button></li>
          <li><button className="quickbutton">Blog</button></li>
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
      <div className="footer-section footer-information">
        <h1>Information</h1>
        <ul>
          <li><button className="infobutton">Login & Register</button></li>
          <li><button className="infobutton">Why Choose Us</button></li>
          <li><button className="infobutton">Terms & Conditions</button></li>
          <li><button className="infobutton">Privacy Policy</button></li>
          <li><button className="infobutton">Refund & Cancellation Policy</button></li>
          <li><button className="infobutton">Contact Us</button></li>
          <li><button className="infobutton">Ekam @ Lifestyle</button></li>
          <li><button className="infobutton">Yoga @ Center</button></li>
        </ul>
      </div>
      <div className="footer-section footer-bottom">
        © Copyright 2024 - Patanjalee Shyambhai Inst. of Yoga & Therapy
      </div>
    </div>
  );
}

export default Footer;


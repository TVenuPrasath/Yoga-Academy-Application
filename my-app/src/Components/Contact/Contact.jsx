import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Contact.css';
import Footer from '../Footer/Footer';
import img1 from '../images/Contactus-removebg-preview.png';

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1b68661a-6a22-4da6-aa29-67247229e1ea");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
  <div>
      <Navbar/>
      <div className='contactpage'>
      <div className="contact-container">
        <div className="contact-image">
          <img src={img1} alt="Contact Us" />
        </div>
        <form className='contact-form' onSubmit={onSubmit}>
          <h2>Contact Us</h2>
          <input type="text" className='name-text-box' name="name" placeholder="Your Name" required/>
          <input type="email" name="email"className='name-text-box' placeholder="Your Email" required/>
          <textarea className='name-text-box'  name="message" placeholder="Your Message" required></textarea>
          <button type="submit" className='contact-submit-button'>Submit Form</button>
          <span>{result}</span>
        </form>
      </div>
      </div>
      <Footer/>
    </div>
  );
}
export default Contact;

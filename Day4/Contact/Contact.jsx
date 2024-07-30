import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Contact.css';
import Footer from '../Footer/Footer';

function Contact() {
  return (
    <div>
      <Navbar/>
      <div className='contactbody'>

      <div className='contactpic'>
        {/* <h1>Contact Us</h1> */}
        {/* <p>
          Please get in touch if you have any questions about your account, need help finding classes, or to give us feedback
        </p> */}
        <div className='contacticon'>

        </div>
      </div>
      <div className='contactbox'>
          <div>
            <label>User Name:</label>
            <br></br>
            <input type='text' placeholder='Username' required id='user1'></input>
            <br></br>
            <br></br>
            <label>Email:</label>
            <br></br>
            <input type='Email' placeholder='Email' required id='user1'></input>
            <br></br>
            <br></br>
            <label>Subject:</label>
            <br></br>
            <input type='tel' required id='user1'></input>
            <br></br>
            <br></br>
            <label>Your Message:</label>
            <br></br>
            <textarea style={{width:"370px", height:"100px",backgroundColor:"white",color:"black"}}></textarea>
            <br></br>
            <br></br>
            <button type='submit' className='button1'>Send</button>

          </div>
      </div>
      <br></br>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact

import React, { useEffect, useState } from 'react'
import './Design.css'
import { getData, postData } from '../JSON/DB';
const Sign = () => {

      const[username,setUsername]=useState("");
      const[email,setEmail]=useState("");
      const[password,setpassword]=useState("");
      const[cpassword,setcpassword]=useState("");
      const [phonenumber,setphonenumber]=useState("");
      const[data,setdata]=useState([]);

      useEffect(() =>{
        const fetch = async() =>{
          const res=await getData();
          setdata(res.data);
        }
        fetch();
      },[]);

      const handlechangeUsername = (event) =>{
         setUsername(event.target.value);
      }

      const handlechangeEmail = (event) =>{
        setEmail(event.target.value);
      }
      
      const handlechangephonenumber = (event)=>{
        setphonenumber(event.target.value);
      }

      const handlechangePassword = (event) =>{
        setpassword(event.target.value);
      }

      const handlechangeCpassword = (event) =>{
          setcpassword(event.target.value);
      }

      const handleSignup = (e) =>{
        
        // e.preventDefault();

        if(username.length===0)
        {
          alert("Please enter Username");
          return ;
        }
        else if(email.length===0)
        {
          alert("Please enter Email");
          return ;

        }
        else if(password.length===0)
        {
          alert("Please enter Password");
          return;

        }
        else if(phonenumber.length===0)
        {
            alert("Please enter Phonenumber")
            return;
        }
        else if(cpassword.length===0)
        {
          alert("Please enter Confirm Password");
          return;
        }
        else if(password!==cpassword)
        {
            alert("Password Mismatch");
            return ;
        }
        else
        {
          const usernameindex = data ? data.findIndex(({uname})=>uname===username):-1;
          if(usernameindex!==-1)
          {
              alert("Username already exists");
              return;
          }
          else
          {
              const emails=data.map(item => item.Email);
              if(emails.includes(email))
              {
                  alert("Email already exists");
                  return ;
              }
              else
              {
                postData(username,email,password,phonenumber);
                alert("User registered successfully");
                return;
              }
          }
        }
      }

  return (
    <div className='box1'>
        <h3>Sign Up</h3>
        <div>
          <label>User Name:</label>
          <br></br>
          <input type='text' placeholder='Username' required id='user' value={username} onChange={handlechangeUsername}></input>
          <br></br>
          <br></br>
          <label>Email:</label>
          <br></br>
          <input type='Email' placeholder='Email' required id='user' value={email} onChange={handlechangeEmail}></input>
          <br></br>
          <br></br>
          <label>Phone Number:</label>
          <br></br>
          <input type='tel' placeholder='Phone Number' required id='user' value={phonenumber} onChange={handlechangephonenumber}></input>
          <br></br>
          <br></br>
          <label>Password:</label>
          <br></br>
          <input type='password' placeholder='Password' required id='user' value={password} onChange={handlechangePassword}></input>
          <br></br>
          <br></br>
          <label>Confirm Password:</label>
          <input type='password' placeholder='Confirm Password' required id='user' value={cpassword} onChange={handlechangeCpassword}></input>
          <br></br>

          <br></br>

          <button type='submit' className='button1' onClick={handleSignup}>Sign Up</button>

        </div>
    </div>
  )
}

export default Sign
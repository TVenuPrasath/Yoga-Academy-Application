import React, { useContext, useEffect, useState } from 'react'
import './Signin.css'
import { useNavigate } from 'react-router-dom';
import { getData } from '../JSON/DB';
// import Home from '../Home/Home';
import Navbar from '../Navbar/Navbar';
import {Context} from '../CONTEXT/BData.jsx';
const SignIn = () => {

  const navigate =  useNavigate();
  const[email,setEmail]=useState("");
  const[password,setpassword]=useState("");
  const[data,setdata]=useState([]);
  const { LogIn } = useContext(Context);

  useEffect(() => {
    const fetch = async() =>{
      const res=await getData();
      setdata(res.data);
    }
    fetch();
},[]);

  const handlechangeEmail = (event) =>{
      setEmail(event.target.value);
  }

  const handlechangePassword = (event)=>{
      setpassword(event.target.value);
  }

  const handlesubmit = (event) =>{
    event.preventDefault();
    if(email.length===0)
    {
        alert("Please enter email");
        return;
    }
    else if(password.length===0)
    {
        alert("Please enter password");
        return;
    }
    else
    {
      const unidex=data.findIndex(item=>item.Email===email);
        const emails=data.map(item=>item.Email);
        if(!emails.includes(email))
        {
          alert("User not found");
          return;
        }
         if(data[unidex].pass!==password)
        {
          alert("Invalid password");
          return;
        }
        else{
          // console.log(admin);
          alert("Login Successful");
          LogIn(data[unidex]);
          navigate('/');
          return;
        }
    }
  }
  const onhandleSignup =()=>{
    navigate('/Sign');
  }
  return (
    <div className='wholelogin'>
      <div className='logindiv'>
      <div>
        <div className='box11'>
            <h3>Login</h3>
            <form onSubmit={handlesubmit}>
            <div>
              <label>Email:</label>
              <br></br>
              <input type='Email' placeholder='Email' required id='user'  value={email} onChange={handlechangeEmail}></input>
              <br></br>
              <br></br>
              <label>Password:</label>
              <br></br>
              <input type='password' placeholder='Password'  id='user' value={password} onChange={handlechangePassword}></input>
              <br></br>
              <br></br>
              <button type='submit' className='button1' >Login</button>
              <p style={{color:"black"}}>Don't have an account? <span type='button' style={{cursor:"pointer",color:"rebeccapurple"}} onClick={onhandleSignup}>Sign Up</span></p>

            </div>
            </form>
        </div>
      </div>
    </div>

    </div>
  )
}

export default SignIn
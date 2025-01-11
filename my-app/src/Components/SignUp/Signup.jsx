import React, { useEffect, useState } from 'react';
import { getData, postData } from '../JSON/DB';
import { useNavigate } from 'react-router-dom';
import './Signup.css';
import { TextField, Button,Checkbox } from '@mui/material';
import axios from 'axios';

function Signup() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [role, setrole] = useState("user");
  const [data, setData] = useState([]);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getData();
      setData(res.data);
    }
    fetchData();
  }, []);


  const handleSignup = async(e) => {
    e.preventDefault();
      console.log(data);
    if (username.length === 0) {
      alert("Please enter Username");
      return;
    }
    if (email.length === 0) {
      alert("Please enter Email");
      return;
    }
    if (password.length === 0) {
      alert("Please enter Password");
      return;
    }
    const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/;
    if(!re.test(password))
    {
        alert("Password must be at least 5 characters long and include letters, numbers, and special characters.");
        return;
    }

    if (phonenumber.length === 0) 
    {
      alert("Please enter Phone Number");
      return;
    }
    if (cpassword.length === 0) 
    {
      alert("Please enter Confirm Password");
      return;
    }
    if (password !== cpassword) 
    {
      alert("Password Mismatch");
      return;
    }

    const usernameIndex = data ? data.findIndex(({ userName }) => userName === username) : -1;
    if (usernameIndex !== -1) 
    {
      alert("Username already exists");
      return;
    } 
    else
    {
      const emails = data.map(item => item.userEmail);
      if (emails.includes(email)) 
      {
        alert("Email already exists");
        return;
      } 
      else 
      {
        await postData(username, email, password, phonenumber, role);
        alert("User registered successfully");
        navigate('/Signin', { replace: true });
        window.location.reload();  
      }
    }
  }
  return (
    <div className='signup-body'>
      <div className='signuppic'>

      </div>
      <div className='signup-div'>
        <form onSubmit={handleSignup}>
          <h1 style={{textAlign:"center",color:"black"}}>Sign Up</h1>
          <TextField label="User Name"placeholder="Username" required fullWidth className='signup-input'value={username}onChange={(e) => setUsername(e.target.value)}/>
          <br></br>
          <br></br>
          <TextField label="Email"placeholder="Email"type="email"required fullWidth className='signup-input'value={email}onChange={(e) => setEmail(e.target.value)}/>
          <br></br>
          <br></br>
          <TextField label="Phone Number"placeholder="Phone Number" type="tel" required fullWidth className='signup-input'value={phonenumber}onChange={(e) => setPhonenumber(e.target.value)}/>
          <br></br>
          <br></br>
          <TextField label="Password" placeholder="Password" type={showPassword ? 'text' : 'password'}required fullWidth className='signup-input'value={password}onChange={(e) => setPassword(e.target.value)}/>
          <Checkbox onClick={()=>{(showPassword)?setShowPassword(false):setShowPassword(true)}}></Checkbox><text style={{color:"black"}}>Show Password</text>
          <br></br>
          <TextField label="Confirm Password" placeholder="Confirm Password" type="password"required fullWidth className='signup-input'value={cpassword}onChange={(e) => setCpassword(e.target.value)}/>
          <br></br>
          <br></br>
          <Button variant="contained" type="submit"className="signup-button"fullWidth onClick={handleSignup}>Sign Up</Button>
        </form>
      </div>
    </div>
  )
}

export default Signup;

import React, { useContext, useEffect, useState } from 'react';
import './Signin.css';
import { useNavigate } from 'react-router-dom';
import { getData } from '../JSON/DB';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Context } from '../CONTEXT/BData';

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);
  const { LogIn } = useContext(Context);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getData();
      setData(res.data);
    };
    fetchData();
  }, []);

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email.length === 0) {
      alert("Please enter email");
      return;
    } else if (password.length === 0) {
      alert("Please enter password");
      return;
    } else {
      const userIndex = data.findIndex(item => item.userEmail === email);
      if (userIndex === -1) {
        alert("User not found");
        return;
      }
      if (data[userIndex].userPassword !== password) {
        alert("Invalid password");
        return;
      } else {
        alert("Login Successful");
        LogIn(data[userIndex],data[userIndex].courses);
        navigate('/');
        return;
      }
    }
  };

  const onHandleSignup = () => {
    navigate('/Signup');
  };

  return (
      <div className='wholelogin'>
        <div className='logindiv'>
          <div>
            <div className='box11'>
              <h3>Login</h3>
              <form onSubmit={handleSubmit}>
                <div>
                  <label>Email:</label>
                  <br />
                  <input
                    type='email'
                    placeholder='Email'
                    required
                    id='user'
                    value={email}
                    onChange={handleChangeEmail}
                  />
                  <br />
                  <br />
                  <label>Password:</label>
                  <br />
                  <input
                    type='password'
                    placeholder='Password'
                    id='password'
                    value={password}
                    onChange={handleChangePassword}
                  />
                  <br />
                  <br />
                  <button type='submit' className='button1'>Login</button>
                  <p style={{ color: "black" }}>
                    Don't have an account?{' '}
                    <span
                      type='button'
                      style={{ cursor: "pointer", color: "rebeccapurple" }}
                      onClick={onHandleSignup}
                    >
                      Sign Up
                    </span>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
};

export default SignIn;

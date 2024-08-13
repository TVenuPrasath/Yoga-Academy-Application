import React, { useState } from 'react'
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import { Context } from '../CONTEXT/BData';
import { useContext } from 'react';
function Navbar() {

    const navigate=useNavigate();
    const {loggedIn,Logout,userData}=useContext(Context);

    const handlelogin = () =>{
        navigate('/Signin');
    }

    const handlehome = () =>{
        navigate('/');
    }

    const handleclasses= ()=>{
        navigate('/Classes');
    }

    const handleabout = () =>{
        navigate('/about');
    }

    const handlecontact = () =>{
        navigate('/contact');
    }



  return (
    <div className='navbar'>
        <div className='navbar1'>
            <button onClick={handlehome} className='logbutton'>Home</button>
            <button onClick={handleclasses} className='logbutton'>Classes</button>
            {(loggedIn && userData.userRole==='Admin')?<button onClick={()=>{navigate('/Institution')}} className='logbutton'>Institutions</button>:<button className='logbutton' onClick={()=>{navigate('/Purchased')}}>Purchased</button>}
            <button onClick={handleabout} className='logbutton'>About</button>
            <button onClick={handlecontact} className='logbutton'>Contact</button>
            {!loggedIn ? (<button onClick={handlelogin} className='logbutton'>Login/SignUp</button>) 
            : userData.userRole === "Admin" ? (<button onClick={() => { navigate('/Profile'); }} className='logbutton'>Admin</button>) 
            : (<button onClick={() => { navigate('/Profile'); }} className='logbutton'>Profile</button>)
            }
        </div>
    </div>
  )
}

export default Navbar
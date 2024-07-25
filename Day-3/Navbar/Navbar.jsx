import React from 'react'
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import { Context } from '../CONTEXT/BData';
import { useContext } from 'react';
function Navbar() {

    const navigate=useNavigate();
    const {loggedIn,Logout}=useContext(Context);

    const handlelogin = () =>{
        navigate('/Signin');
    }

    const handlehome = () =>{
        navigate('/');
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
            <button onClick={handleabout} className='logbutton'>About</button>
            <button onClick={handlecontact} className='logbutton'>Contact</button>
            {(loggedIn)?<button  onClick={()=>{navigate('/');Logout()}} className='logbutton' >Logout</button>:<button  onClick={handlelogin} className='logbutton' >Login/SignUp</button>}
        </div>
    </div>
  )
}

export default Navbar
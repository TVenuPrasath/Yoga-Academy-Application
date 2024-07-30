import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Sign from './Components/SignUp/Sign.jsx';
import Signin from './Components/Login/SignIn.jsx';
import Home from './Components/Home/Home.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import TermsAndConditions from './Components/Terms&Conditions/TermsAndConditions.jsx';
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy.jsx';
import RefundPolicy from './Components/RefundPolicy/RefundPolicy.jsx';
import Profile from './Components/Profile/Profile.jsx';
import Plans from './Components/Plans/Plans.jsx';
import Table from './Components/Table/Table.jsx';
function App() {
  return (
    <div className ="App">
      <Routes>
        <Route path='/' exact element={<Home/>}></Route>
        <Route path='/Signin' element={<Signin/>}></Route>
        <Route path='/Sign' element={<Sign/>}></Route>
        <Route path='/Navbar' element={<Navbar/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/Terms&Conditions' element={<TermsAndConditions/>}></Route>
        <Route path='/PrivacyPolicy' element={<PrivacyPolicy/>}></Route>
        <Route path='/Refund' element={<RefundPolicy/>}></Route>
        <Route path='/Profile' element={<Profile/>}></Route>
        <Route path='/Classes' element={<Plans/>}></Route>
      </Routes> 
    </div>
  );
}
export default App;

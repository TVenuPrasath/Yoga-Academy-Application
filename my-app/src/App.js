// import React from 'react';
// import {Route, Routes} from 'react-router-dom'
// import Signin from './Components/Login/SignIn.jsx';
// import Home from './Components/Home/Home.jsx';
// import Navbar from './Components/Navbar/Navbar.jsx';
// import About from './Components/About/About.jsx';
// import Contact from './Components/Contact/Contact.jsx';
// import TermsAndConditions from './Components/Terms&Conditions/TermsAndConditions.jsx';
// import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy.jsx';
// import RefundPolicy from './Components/RefundPolicy/RefundPolicy.jsx';
// import Profile from './Components/Profile/Profile.jsx';
// import Plans from './Components/Plans/Plans.jsx';
// import Signup from './Components/SignUp/Signup.jsx';
// import ExplorePage from './Components/Plans/ExplorePage.jsx';
// import Institution from './Components/Institutes/Institution.jsx';
// import Addplan from './Components/Plans/Addplan.jsx';
// import PurchasedPlans from './Components/Plans/PurchasedPlans.jsx';
// function App() {
//   return (
//     <div className ="App">
//       <Routes>
//         <Route path='/' exact element={<Home/>}></Route>
//         <Route path='/Signin' element={<Signin/>}></Route>
//         <Route path='/Signup' element={<Signup/>}></Route>
//         <Route path='/Navbar' element={<Navbar/>}></Route>
//         <Route path='/About' element={<About/>}></Route>
//         <Route path='/Contact' element={<Contact/>}></Route>
//         <Route path='/Terms&Conditions' element={<TermsAndConditions/>}></Route>
//         <Route path='/PrivacyPolicy' element={<PrivacyPolicy/>}></Route>
//         <Route path='/Refund' element={<RefundPolicy/>}></Route>
//         <Route path='/Profile' element={<Profile/>}></Route>
//         <Route path='/Classes' element={<Plans/>}></Route>
//         <Route path='/Institution' element={<Institution/>}></Route>
//         <Route path='/Exploreclass' element={<ExplorePage/>}></Route>
//         <Route path='/Addplan' element={<Addplan/>}></Route>
//         <Route path='/Purchased' element={<PurchasedPlans/>}></Route>
//       </Routes> 
//     </div>
//   );
// }
// export default App;
import React from 'react';
import { Route, Routes } from 'react-router-dom';
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
import Signup from './Components/SignUp/Signup.jsx';
import ExplorePage from './Components/Plans/ExplorePage.jsx';
import Institution from './Components/Institutes/Institution.jsx';
import Addplan from './Components/Plans/Addplan.jsx';
import PurchasedPlans from './Components/Plans/PurchasedPlans.jsx';
import ProtectedRoute from './Components/Routes/ProtectedRoute.jsx';
import Payment from './Components/Payment/Payment.jsx';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/Signin' element={<Signin />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Terms&Conditions' element={<TermsAndConditions />} />
        <Route path='/PrivacyPolicy' element={<PrivacyPolicy />} />
        <Route path='/Refund' element={<RefundPolicy />} />
        
        <Route path='/Profile' element={<ProtectedRoute element={<Profile />} />} />
        <Route path='/Classes' element={<ProtectedRoute element={<Plans />} />} />
        <Route path='/Institution' element={<ProtectedRoute element={<Institution />} adminOnly />} />
        <Route path='/Addplan' element={<ProtectedRoute element={<Addplan />} adminOnly />} />
        <Route path='/Exploreclass' element={<ProtectedRoute element={<ExplorePage />} />} />
        <Route path='/Purchased' element={<ProtectedRoute element={<PurchasedPlans />} />} />
      </Routes>
      {/* <Payment/> */}
    </div>
  );
}

export default App;


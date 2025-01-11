import React, { useContext, useEffect, useState } from 'react';
import './PurchasedPlans.css';
import { Context } from '../CONTEXT/BData';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

function PurchasedPlans() {
  const [purchasedPlans, setPurchasedPlans] = useState([]);
  const { userData, LogIn } = useContext(Context);

  useEffect(() => {
    const fetchPurchasedPlans = async () => {
      const res = await userData.courses;
      setPurchasedPlans(res);
    };
    fetchPurchasedPlans();
  }, [userData]);

  const handleCancel = async (index) => {
    const updatedPlans = purchasedPlans.filter((_, i) => i !== index);
    setPurchasedPlans(updatedPlans);
    
    // Update user's courses in context and backend if needed
    const updatedUserData = { ...userData, courses: updatedPlans };
    LogIn(updatedUserData);
    
    // Optionally, send updated data to your backend
    // await updateCourses(userData.id, updatedPlans);
  };

  return (
    <div>
      <Navbar />
      <div className='purchasepage'>
        {purchasedPlans.map((pplan, index) => (
          <div key={index} className='plan-card'>
            <h2 className='course-name'>{pplan.courseName}</h2>
            <p className='course-cost'>Cost: ${pplan.courseCost}</p>
            <p className='course-description'>{pplan.courseDescription}</p>
            <p className='course-duration'>Duration: {pplan.courseDuration}</p>
            <button className='cancel-button' onClick={() => handleCancel(index)}>Cancel</button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default PurchasedPlans;

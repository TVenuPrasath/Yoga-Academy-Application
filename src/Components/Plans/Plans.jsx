import React, { useContext, useEffect, useState } from 'react';
import './Plans.css';
import Navbar from '../Navbar/Navbar';
import { Context } from '../CONTEXT/BData';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';
import { updateCourses, getuserid, getPlanData, deletePlanData } from '../JSON/DB';

function Plans() {
  const { userData, LogIn } = useContext(Context);
  const [plans, setPlans] = useState([]);
  const [explore, setExplore] = useState(false);
  const [explorePlan, setExplorePlan] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editPlan, setEditPlan] = useState({
    courseName: '',
    courseOverview: '',
  });
  const navigate = useNavigate();

  const handleBuy = async (plan) => {
    alert("Course selected");
    const updatedPlan = [...(userData.courses || []), plan];
    await updateCourses(userData.id, updatedPlan);
    const updatedUserData = await getuserid(userData.id);
    LogIn(updatedUserData.data);
    navigate('/Purchased');
  };

  useEffect(() => {
    const fetch = async () => {
      const res = await getPlanData();
      setPlans(res.data);
    };
    fetch();
  }, []);

  const handleDelete = async (id) => {
    await deletePlanData(id);
    alert("Course deleted successfully");
    setPlans(prevPlans => prevPlans.filter(plan => plan.courseId !== id));
  };

  const handleEditClick = (plan) => {
    setIsEditing(true);
    setEditPlan(plan);
  };

  const handleSaveClick = async () => {
    await updateCourses(editPlan.courseId, editPlan);
    setIsEditing(false);
    const res = await getPlanData();
    setPlans(res.data);
  };

  const handleExplore = (plan) => {
    setExplore(true);
    setExplorePlan(plan);
  };

  useEffect(() => {
    if (explore) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [explore]);

  return (
    <div>
      <Navbar />
      <div className='plansbody'>
        {isEditing ? (
          <div className="edit-plan-container">
            <h2>Edit Plan</h2>
            <form className="edit-plan-form">
              <label>Course Name</label>
              <input
                type="text"
                value={editPlan.courseName}
                onChange={(e) =>
                  setEditPlan({ ...editPlan, courseName: e.target.value })
                }
              />

              <label>Course Overview</label>
              <textarea
                value={editPlan.courseOverview}
                onChange={(e) =>
                  setEditPlan({ ...editPlan, courseOverview: e.target.value })
                }
              />

              <div className="edit-plan-buttons">
                <button type="button" className="cancel-button" onClick={() => setIsEditing(false)}>
                  Cancel
                </button>
                <button type="button" className="save-button" onClick={handleSaveClick}>
                  Save
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className='totalplan'>
            {plans.map((plan, index) => (
              <div key={index} className='plans'>
                <div className='planpic'>
                  {/* Plan Image Placeholder */}
                </div>
                <div className='plantext'>
                  <h2 style={{fontFamily:"Playfair Display"}}>{plan.courseName}</h2>
                  <p style={{fontSize:"20px",fontFamily:"Quicksand"}}>{plan.courseOverview}</p>
                  <div className='plan-edit-buttons'>
                    {userData.userRole === 'user' ? (
                      <button onClick={() => handleExplore(plan)}>Explore</button>
                    ) : (
                      <button className='editing-button' onClick={() => handleEditClick(plan)}>Edit</button>
                    )}
                    {userData.userRole === 'user' ? (
                      <button onClick={() => handleBuy(plan)}>Buy</button>
                    ) : (
                      <button className='del-button' onClick={() => handleDelete(plan.courseId)}>Delete</button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <br/>
        {explore && explorePlan ? (
          <div className='bodyexploreplan'>
            <div className='divexploreplan'>
              <h1>{explorePlan.courseName}</h1>
              <p>{explorePlan.courseDescription}</p>
              <p>Cost: ${explorePlan.courseCost}</p>
            </div>
            <button onClick={() => { setExplore(false); setExplorePlan(null); }}>Close</button>
          </div>
        ) : null}
        {userData.userRole === "Admin" && !isEditing ? (
          <button
            style={{ width: "90px", marginLeft: "540px", cursor: "pointer", borderRadius: "10px" }}
            onClick={() => { navigate('/Addplan') }}
          >
            Add Classes
          </button>
        ) : null}
      </div>
      <div className='emptybox'></div>
      <Footer />
    </div>
  );
}

export default Plans;

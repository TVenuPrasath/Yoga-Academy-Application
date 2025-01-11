import {React,useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Addplan.css';

function Addplan() {
    const [planName, setplanName] = useState("");
    const [planOv, setplanOv] = useState("");
    const [planDesc, setplanDesc] = useState("");
    const [planCost, setplanCost] = useState();
    const navigate=useNavigate();


    const handleaddcourse = async(event)=>{
        event.preventDefault();
        const yogaplan ={
          courseName: planName,
          courseOverview: planOv,
          courseDescription: planDesc,
          courseCost: planCost,
          courseDuration:planCost
        }
        await axios.post("http://127.0.0.1:8080/post/course",yogaplan);
        console.log(yogaplan);
        alert("Course Added Successfully"); 
        console.log("navigate to class");
        navigate("/Classes");
    }
  return (

    <div>
        <div className='detailbox'>
          <form onSubmit={ handleaddcourse}>
          <label>Plan Name:</label>
          <input type='text' placeholder='Plan Name' required id='planname' onChange={(event)=>{setplanName(event.target.value);}}/>
          <label>Plan Overview:</label>
          <input type='text' maxLength="275" placeholder='Plan Overview' required id='planname' onChange={(event)=>{setplanOv(event.target.value);}}/>
          <label>Plan Cost:</label>
          <input type='text' placeholder='Plan Cost' required id='planname' onChange={(event)=>{setplanCost(event.target.value);}}/>
          <label>Plan Description:</label>
          <textarea style={{ width: "370px", height: "100px", backgroundColor: "white", color: "black", marginLeft: "50px" }} onChange={(event)=>{setplanDesc(event.target.value);}}></textarea>
          <label>About Course:</label>
          <textarea style={{ width: "370px", height: "100px", backgroundColor: "white", color: "black", marginLeft: "50px" }} onChange={(event)=>{setplanDesc(event.target.value);}}></textarea>
          <label>Benefits of Course:</label>
          <textarea style={{ width: "370px", height: "100px", backgroundColor: "white", color: "black", marginLeft: "50px" }} onChange={(event)=>{setplanDesc(event.target.value);}}></textarea>
          <label>What to do With this plan:</label>
          <textarea style={{ width: "370px", height: "100px", backgroundColor: "white", color: "black", marginLeft: "50px" }} onChange={(event)=>{setplanDesc(event.target.value);}}></textarea>
          <button required type='submit' className='button1' style={{cursor:"pointer"}} >Add Class</button>
          </form>
        </div>
    </div>
  )
}

export default Addplan
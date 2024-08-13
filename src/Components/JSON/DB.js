import axios from 'axios';

const API_URL = 'http://localhost:8080';

export const getData = async () => await axios.get(`${API_URL}/getusers`);

export const getuserid = async(id)=> await axios.get(`${API_URL}/getusersby/${id}`);

export const postData = async (username, email, password, phoneNumber, admin) => {
  const { data: edata } = await getData();
  const newId = Math.max(...edata.map(user => user.id),0) + 1;

  const ND = {
    userName:username,
    userEmail:email,
    userPassword:password,
    userPhonenumber: phoneNumber,
    userRole: admin,
    id: newId,
    courses:[]
  };
  await axios.post(`${API_URL}/postusers`, ND);
};

export const putData = async (id,newData) => {
  await axios.put(`${API_URL}/update/user/${id}`, newData);
};

export const getPlanData = async () => await axios.get(`${API_URL}/get/course`); 

export const postPlanData = async (planName, planOv, planDesc, planCost) => {

    const planedata = await getPlanData();

    const newPlanid = Math.max(...planedata.map(plan => plan.id), 0) + 1;

    const Plans = {
      id: newPlanid,
      PlanName: planName,
      PlanOverview: planOv,
      PlanDescription: planDesc,
      PlanCost: planCost
    };

    await axios.post(`${API_URL}/PlanData`, Plans);
  } 

  export const deleteuser = async(id) => await axios.delete(`${API_URL}/delete/user/${id}`,id);

export const putPlanData = async (id, newPlanData) => {
  await axios.put(`${API_URL}/update/users/${id}`, newPlanData);
};

export const deletePlanData = async (id) => {
  await axios.delete(`${API_URL}/delete/course/${id}`);
};

export const updateCourses = async(id, courses) => {
  try {
    const res = await axios.get(`${API_URL}/getusersby/${id}`);
    const updatedUserData = res.data;
    updatedUserData.courses = courses;
    await axios.put(`${API_URL}/update/user-course/${id}`, updatedUserData);
  } catch (error) {
    console.error("Error updating user courses:", error.response || error);
  }
};


export const getInstitute = async() => await axios.get(`${API_URL}/get/institutes`);


export const postInstitute = async(insdata) => await axios.post(`${API_URL}/insert/institute`,insdata);


export const putInstitute = async (id, updatedInstitute) => {
  await axios.put(`${API_URL}/update/institutes/${id}`, updatedInstitute);
};

export const deleteInstitute = async(id) =>{
  await axios.delete(`${API_URL}/delete/institutes/${id}`);
}
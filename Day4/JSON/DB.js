import axios from 'axios';

const API_URL = 'http://localhost:3001';

export const getData = async () => await axios.get(`${API_URL}/UserData`);

export const postData = async (username, email, password, phoneNumber, admin) => {
  const { data: edata } = await getData();
  const newId = Math.max(...edata.map(user => user.id), 0) + 1;

  const ND = {
    uname: username,
    Email: email,
    pass: password,
    PhoneNumber: phoneNumber,
    Admin: admin,
    id: newId
  };

  await axios.post(`${API_URL}/UserData`, ND);
};

export const putData = async (id, newData) => {
  await axios.put(`${API_URL}/UserData/${id}`, newData);
};

export const getPlanData = async () => {
    const response = await axios.get(`${API_URL}/PlanData`);
    return response.data; 
};

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

export const putPlanData = async (id, newPlanData) => {
  await axios.put(`${API_URL}/PlanData/${id}`, newPlanData);
};

export const deletePlanData = async (id) => {
  await axios.delete(`${API_URL}/PlanData/${id}`);
};

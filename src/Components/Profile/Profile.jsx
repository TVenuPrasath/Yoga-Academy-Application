import React, { useEffect, useState, useContext } from "react";
import "./Profile.css";
import { Context } from "../CONTEXT/BData";
import { useNavigate } from "react-router-dom";
import { putData, getData,deleteuser } from "../JSON/DB";
import Footer from '../Footer/Footer';
import Navbar from "../Navbar/Navbar";

const Profile = () => {
    const { loggedIn, Logout, LogIn } = useContext(Context);
    const { userData } = useContext(Context);
    const [edit, setEdit] = useState(false);
    const [name, setName] = useState(userData.userName);
    const [email, setEmail] = useState(userData.userEmail);
    const [ph, setPh] = useState(userData.userPhonenumber);
    const [pass, setPass] = useState(userData.userPassword);
    const [activetab, setActiveTab] = useState("account");
    const [userDatas, setUserDatas] = useState([]);
    const [editUser, setEditUser] = useState(null); // New state for managing editing
    const [editUserRole, setEditUserRole] = useState(""); // New state for managing user role

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const res = await getData();
            setUserDatas(res.data);
        };
        fetchData();
    }, []);

    const handleSave = async () => {
        const newData = {
            id: userData.id,
            userName: name,
            userEmail: email,
            userPhonenumber: ph,
            userPassword: pass,
            userRole: userData.userRole,
        };
        setEdit(false);
        console.log(newData);
        putData(userData.id, newData);
        LogIn(newData);
        alert("Updated Successfully");
    };

    const handleEditUser = (user) => {
        setEditUser(user); // Set the user to be edited
        setName(user.userName);
        setEmail(user.userEmail);
        setPh(user.userPhonenumber);
        setPass(user.userPassword);
        setEditUserRole(user.userRole); // Set the user's role
    };

    const handleSaveUser = async () => {
        const updatedUser = {
            ...editUser,
            id: editUser.id,
            userName: name,
            userEmail: email,
            userPhonenumber: ph,
            userPassword: pass,
            userRole: editUserRole, // Include the updated role
        };
        console.log(updatedUser);
        await putData(editUser.id, updatedUser);

        const updatedUsers = userDatas.map((user) =>
            user.id === editUser.id ? updatedUser : user
        );
        setUserDatas(updatedUsers);
        setEditUser(null);
        alert("User updated successfully!");
    };

    const handleDeleteUser = async(id) =>{
        console.log(id);
        await deleteuser(id);
        alert("User deleted successfully!");
        const updatedUsers = userDatas.filter(user => user.id !== id);
        setUserDatas(updatedUsers);

    };


    return (
        <div>
            <Navbar />
            <div className="profile-container">
                {activetab !== "users" && (
                    <div className="profile-left">
                        <div>
                            <div className="profile-image">
                                <p style={{paddingTop:"25px",color:"#0C646F"}}>{name.charAt(0)}</p>
                            </div>
                            <h2 style={{}}>{loggedIn ? userData.userName : ""}</h2>
                        </div>
                        <div className="adminreq"></div>
                    </div>
                )}
                <div className="profile-right" style={{ width: activetab === "users" ? "100%" : "75%" }}>
                    <div className="tabs">
                        <button
                            className={`tab ${activetab === "account" ? "active-tab" : ""}`}
                            onClick={() => setActiveTab("account")}
                        >
                            Account
                        </button>
                        {userData.userRole === "Admin" && (
                            <button
                                className={`tab ${activetab === "users" ? "active-tab" : ""}`}
                                onClick={() => setActiveTab("users")}
                            >
                                Users
                            </button>
                        )}
                    </div>
                    {activetab === "account" ? (
                        <div className="profile-form">
                            <div className="form-group">
                                <label>UserName</label>
                                <input
                                    type="text"
                                    readOnly={!edit}
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    readOnly={!edit}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Phone Number</label>
                                <input
                                    type="text"
                                    readOnly={!edit}
                                    value={ph}
                                    onChange={(e) => setPh(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    value={pass}
                                    onChange={(e) => setPass(e.target.value)}
                                    style={{ width: "50%" }}
                                />
                            </div>
                            <button
                                className="logout-button"
                                onClick={() => {
                                    navigate("/Signin");
                                    Logout();
                                }}
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <div className="users-table">
                            <table className="tablet" style={{ width: "100%" }}>
                                <thead>
                                    <tr>
                                        <th>User Name</th>
                                        <th>Email</th>
                                        <th>Phone Number</th>
                                        <th>Admin</th>
                                        <th>Actions</th>
                                        <th>Courses</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {userDatas.map((user, index) => (
                                        <tr key={index}>
                                            <td>{user.userName}</td>
                                            <td>{user.userEmail}</td>
                                            <td>{user.userPhonenumber}</td>
                                            <td>{user.userRole === "Admin" ? "Yes" : "No"}</td>
                                            <td>
                                                <button onClick={() => handleEditUser(user)}>Edit</button>
                                                <button className="delete-user-button" onClick={() => handleDeleteUser(user.id)}>Delete</button>
                                            </td>
                                            <td></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            {editUser && (
                                <div className="edit-user-form">
                                    <h2>Edit User</h2>
                                    <div className="form-group">
                                        <label>UserName</label>
                                        <input
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Phone Number</label>
                                        <input
                                            type="text"
                                            value={ph}
                                            onChange={(e) => setPh(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input
                                            type="password"
                                            value={pass}
                                            onChange={(e) => setPass(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Role</label>
                                        <select value={editUserRole} onChange={(e) => setEditUserRole(e.target.value)}>
                                            <option value="User">User</option>
                                            <option value="Admin">Admin</option>
                                        </select>
                                    </div>
                                    <button className="save-user-button" onClick={handleSaveUser}>
                                        Save
                                    </button>
                                    <button className="cancel-user-button" onClick={() => setEditUser(null)}>
                                        Cancel
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                    {edit === false && activetab === "account" ? (
                        <button className="edit-button" onClick={() => setEdit(true)}>
                            Edit
                        </button>
                    ) : activetab === "account" ? (
                        <button className="edit-button" onClick={handleSave}>
                            Save
                        </button>
                    ) : null}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Profile;

import React, { useState, useEffect } from 'react';
import './Institution.css';
import Navbar from '../Navbar/Navbar';
import { getInstitute, postInstitute, putInstitute,deleteInstitute } from '../JSON/DB';

function Institution() {
    const [institutes, setInstitutes] = useState([]);
    const [instituteName, setInstituteName] = useState("");
    const [instituteAddress, setInstituteAddress] = useState("");
    const [instituteEmail, setInstituteEmail] = useState("");
    const [institutePhoneNumber, setInstitutePhoneNumber] = useState("");
    const [editInstitute, setEditInstitute] = useState(null);
    const [addInstitutes, setAddInstitutes] = useState(false);

    useEffect(() => {
        const loadInstitutes = async () => {
            try {
                const result = await getInstitute();
                setInstitutes(result.data);
            } catch (error) {
                console.error("Failed to fetch institutes:", error);
            }
        };
        loadInstitutes();
    }, []);

    const handleAddInstitute = async () => {
        const newInstitute = {
            instituteName,
            instituteAddress,
            instituteEmail,
            institutePhoneNumber,
        };

        try {
            await postInstitute(newInstitute);

            const result = await getInstitute();
            setInstitutes(result.data);

            setInstituteName("");
            setInstituteAddress("");
            setInstituteEmail("");
            setInstitutePhoneNumber("");
            setAddInstitutes(false);
        } catch (error) {
            console.error("Failed to add institute:", error);
        }
    };

    const handleEditInstitute = (institute) => {
        console.log("Editing institute:", institute); 
        setInstituteName(institute.instituteName);
        setInstituteAddress(institute.instituteAddress);
        setInstituteEmail(institute.instituteEmail);
        setInstitutePhoneNumber(institute.institutePhoneNumber);
        setEditInstitute(institute);
        setAddInstitutes(true); 
    };

    const handleDeleteInstitute = async(instituteId)=>{
            await deleteInstitute(instituteId)
                alert("Institute Deleted successfully");
                const response = await getInstitute();
                setInstitutes(response.data);
            
    }

    const handleUpdateInstitute = async () => {
        const updatedInstitute = {
            ...editInstitute,
            instituteName,
            instituteAddress,
            instituteEmail,
            institutePhoneNumber,
        };

        console.log("Updated institute:", updatedInstitute); 

        try {
            await putInstitute(updatedInstitute.instituteId, updatedInstitute);

            const result = await getInstitute();
            setInstitutes(result.data);

            setInstituteName("");
            setInstituteAddress("");
            setInstituteEmail("");
            setInstitutePhoneNumber("");
            setEditInstitute(null);
            setAddInstitutes(false); 
        } catch (error) {
            console.error("Failed to update institute:", error);
        }
    };

    const handleCancel = () => {
        setInstituteName("");
        setInstituteAddress("");
        setInstituteEmail("");
        setInstitutePhoneNumber("");
        setAddInstitutes(false);
        setEditInstitute(null);
    };

    return (
        <div className='institutepage'>
            <Navbar />
            <h1 style={{ color: "#0C646F" }}>Institutions</h1>
            <button className="add-institute-button" onClick={() => setAddInstitutes(true)}>Add Institutes</button>
            <br></br>
            <br></br>
            {addInstitutes || editInstitute ? (
                <div className="add-institute-form">
                    <input 
                        type="text" 
                        placeholder="Institute Name" 
                        value={instituteName} 
                        onChange={(e) => setInstituteName(e.target.value)} 
                    />
                    <input 
                        type="text" 
                        placeholder="Institute Address" 
                        value={instituteAddress} 
                        onChange={(e) => setInstituteAddress(e.target.value)} 
                    />
                    <input 
                        type="email" 
                        placeholder="Institute Email" 
                        value={instituteEmail} 
                        onChange={(e) => setInstituteEmail(e.target.value)} 
                    />
                    <input 
                        type="text" 
                        placeholder="Institute Phone Number" 
                        value={institutePhoneNumber} 
                        onChange={(e) => setInstitutePhoneNumber(e.target.value)} 
                    />
                    <button onClick={editInstitute ? handleUpdateInstitute : handleAddInstitute}>
                        {editInstitute ? 'Update' : 'Submit'}
                    </button>
                    <button onClick={handleCancel}>Cancel</button>
                </div>
            ) : null}
            <table className='institutetable'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>PhoneNumber</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {institutes.map((institute, index) => (
                        <tr key={index}>
                            <td>{institute.instituteName}</td>
                            <td>{institute.instituteAddress}</td>
                            <td>{institute.institutePhoneNumber}</td>
                            <td>{institute.instituteEmail}</td>
                            <td>
                                <button className="edit-institute-button" onClick={() => handleEditInstitute(institute)}>Edit</button>
                                <button className="edit-institute-button" onClick={()=>handleDeleteInstitute(institute.instituteId)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Institution;




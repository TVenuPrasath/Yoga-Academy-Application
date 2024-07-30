import React, { useState, useEffect, useMemo } from 'react';

export const Context = React.createContext();

const BData = ({ children }) => {
    const [loggedIn, setLogIn] = useState(() => {
        const d = localStorage.getItem("Login");
        return d ? JSON.parse(d) : false;
    });
    const [userData, setUserData] = useState(() => {
        const userdata = localStorage.getItem("User");
        return userdata ? JSON.parse(userdata) : null;
    });

    const contexts = useMemo(() => {
        return {
            loggedIn,
            userData,
            LogIn: (user) => { setLogIn(true); setUserData(user);},
            Logout: () => { setLogIn(false); setUserData(null); }
        };
    }, [loggedIn, userData]);

    useEffect(() => {
        localStorage.setItem("Login", JSON.stringify(loggedIn));
        localStorage.setItem("User", JSON.stringify(userData));
    }, [loggedIn, userData]);

    return (
        <Context.Provider value={contexts}>
            {children}
        </Context.Provider>
    );
};

export default BData;

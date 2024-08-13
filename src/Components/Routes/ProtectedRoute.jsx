import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Context } from '../CONTEXT/BData';

function ProtectedRoute({ element, adminOnly = false }) {
  const { loggedIn, userData } = useContext(Context);

  if (!loggedIn) {
    return <Navigate to="/Signin" />;
  }

  if (adminOnly && (!userData || userData.userRole !== 'Admin')) {
    return <Navigate to="/" />;
  }

  return element;
}

export default ProtectedRoute;

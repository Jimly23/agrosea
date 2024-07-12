import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); // Pastikan state.auth.isAuthenticated adalah boolean yang menunjukkan status login
  
  return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;

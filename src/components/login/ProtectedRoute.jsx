// src/components/ProtectedRoute.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  const navigate = useNavigate(); // Hook for programmatic navigation

  const handleLoginClick = () => {
    navigate("/login"); // Navigate to the login page
  };

  return isAuthenticated ? (
    <Component {...rest} />
  ) : (
    <section id="about" className="about mt-xxl-5 mt-4" style={{ textAlign: 'center' }}>
      <div className="container" data-aos="fade-up">
        <h2>Login Required</h2>
        <p>You must log in to access this page.</p>
        <button 
          onClick={handleLoginClick} 
          className="btn btn-primary" // You can style the button as needed
        >
          Sign In
        </button>
      </div>
    </section>
  );
};

export default ProtectedRoute;

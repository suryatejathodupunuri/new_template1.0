import "./assets/vendor/aos/aos.css";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/glightbox/css/glightbox.min.css";
import "./assets/css/style.css"; 
import "./globalStyled.css";  
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importing Bootstrap JS

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// Import components
import Navbar from "./components/navbar/Navbar.jsx";
import Home from "./components/homeLanding/Home.jsx";
import Footer from "./components/footer/Footer.jsx";
import Trynow from "./components/trynow/Trynow.jsx";
import ContactUs from "./components/contactUs/ContactUs.jsx";
import Signup from "./components/signup/Signup.jsx";
import Login from "./components/login/Login.jsx";
import Dashboard from "./components/dashboard/Dashboard.jsx"; // Import the new Dashboard component
import ProtectedRoute from "./components/login/ProtectedRoute.jsx"; // Import the ProtectedRoute component
const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track login status

  // Effect to check authentication status from local storage
  useEffect(() => {
    const token = localStorage.getItem("token"); // Check for token in local storage
    setIsAuthenticated(!!token); // Set authenticated state based on token presence
  }, []);

  return (
    <>
      <Router>
        {/* Toast Notification Container */}
        <ToastContainer 
          position="top-right" 
          autoClose={3000} 
          hideProgressBar={false} 
          closeOnClick 
          pauseOnHover 
          draggable 
          theme="colored" 
        />
        
        {/* Pass login status to Navbar */}
        <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trynow" element={<Trynow/>} />

          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute 
                isAuthenticated={isAuthenticated} 
                component={Dashboard} 
              />
            } 
          />  {/* Added ProtectedRoute for Dashboard */}
        </Routes>
        
        <Footer />
      </Router>
    </>
  );
};

export default App;

import React, { useState } from "react";
import "../../globalStyled.css";
import { toast } from "react-toastify";
import axios from "axios"; // Import axios for making API calls
import { url } from "../../creds"; // Import URL from cred.js
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuthenticated }) => { // Add setIsAuthenticated prop to manage authentication state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const navigate = useNavigate(); // Hook for navigation

  // Validate email and password
  const validate = () => {
    let valid = true;
    const newErrors = { email: "", password: "" };

    // Email validation
    if (!email) {
      newErrors.email = "Email is required";
      valid = false;
      toast.error("Email is required"); // Trigger toast immediately
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
      valid = false;
      toast.error("Email is invalid"); // Trigger toast immediately
    }

    // Password validation
    if (!password) {
      newErrors.password = "Password is required";
      valid = false;
      toast.error("Password is required"); // Trigger toast immediately
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
      valid = false;
      toast.error("Password must be at least 6 characters long"); // Trigger toast immediately
    }

    setErrors(newErrors);
    return valid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      // Call the API for login
      axios.post(`${url}v1/login`, { email, password })
        .then((response) => {
          if (response.status === 200) {
            const { message, token } = response.data; // Destructure message and token from the response
            localStorage.setItem("token", token); // Save the token in local storage
            toast.success(message); // Show success message
            setIsAuthenticated(true); // Update authentication state
            // Redirect to the dashboard (if using react-router)
            navigate('/dashboard'); // Uncomment and use navigate if you have set up react-router
          }
        })
        .catch((error) => {
          // Handle different HTTP error codes and show corresponding toast messages
          if (error.response) {
            if (error.response.status === 400) {
              toast.error("Bad Request (400) - Please check your input.");
            } else if (error.response.status === 404) {
              toast.error("Not Found (404) - API endpoint not found.");
            } else if (error.response.status === 401) {
              toast.error("Unauthorized - Invalid email or password.");
            } else if (error.response.status === 500) {
              toast.error("Internal Server Error (500) - Please try again later.");
            } else {
              toast.error(`Unexpected Error: ${error.response.status}`);
            }
          } else {
            toast.error("Network Error - Please check your internet connection.");
          }
        });
    } else {
      toast.error("Please fix the form errors."); // Trigger toast immediately
    }
  };

  return (
    <section id="login" className="contact mt-4">
      <div className="container mt-4">
        <div className="container" data-aos="fade-up">
          <header className="section-header">
            <p>Login</p>
          </header>

          <div className="row gy-4">
            <div className="col-lg-6 offset-lg-3">
              <form onSubmit={handleSubmit} className="php-email-form">
                <div className="row gy-4">
                  <div className="col-md-12">
                    <input
                      type="email"
                      name="email"
                      className={`form-control ${errors.email ? "is-invalid" : email ? "is-valid" : ""}`}
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  </div>

                  <div className="col-md-12">
                    <input
                      type="password"
                      name="password"
                      className={`form-control ${errors.password ? "is-invalid" : password.length >= 6 ? "is-valid" : ""}`}
                      placeholder="Your Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                  </div>

                  <div className="col-md-12 text-center">
                    <button type="submit">Login</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

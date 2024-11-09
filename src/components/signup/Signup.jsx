import React, { useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "../../globalStyled.css";
import axios from "axios";
import { url } from "../../creds"; // Import URL from cred.js (should be at the top of the file)

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [houseNo, setHouseNo] = useState("");
  const [location, setLocation] = useState({ type: "Point", coordinates: [0, 0] });
  const [type, setType] = useState("user");
  const [errors, setErrors] = useState({});

  // Validation for form fields
  const validate = () => {
    let valid = true;
    const newErrors = {};

    if (!name) {
      newErrors.name = "Name is required";
      valid = false;
    }
    if (!email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
      valid = false;
    }
    if (!password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
      valid = false;
    }
    if (!contactNo) {
      newErrors.contactNo = "Contact number is required";
      valid = false;
    }
    if (!houseNo) {
      newErrors.houseNo = "House number is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      axios.post(`${url}v1/register`, { 
        name, 
        email, 
        password, 
        contact_no: contactNo, 
        house_no: houseNo, 
        location, 
        type 
      })
      .then((response) => {
        // Show success toast if signup is successful
        if (response.status === 200) {
          toast.success("Signup successful!");
        }
      })
      .catch((error) => {
        // Handle different HTTP error codes and show corresponding toast messages
        if (error.response) {
          if (error.response.status === 400) {
            toast.error("Bad Request (400) - Please check your input.");
          } else if (error.response.status === 404) {
            toast.error("Not Found (404) - API endpoint not found.");
          } else if (error.response.status === 500) {
            toast.error("Internal Server Error (500) - Please try again later.");
          } else {
            toast.error(`Unexpected Error: ${error.response.status}`);
          }
        } else if (error.request) {
          toast.error("Network Error - Please check your internet connection.");
        } else {
          toast.error("Error - Something went wrong.");
        }
      });
    } else {
      toast.error("Please fix the form errors.");
    }
  };

  return (
    <section id="signup" className="contact mt-4">
      <div className="container mt-4">
        <div className="container" data-aos="fade-up">
          <header className="section-header">
            <p>Signup</p>
          </header>
          <div className="row gy-4">
            <div className="col-lg-6 offset-lg-3">
              <form onSubmit={handleSubmit} className="php-email-form">
                <div className="row gy-4">
                  <div className="col-md-12">
                    <input
                      type="text"
                      className={`form-control ${errors.name && "is-invalid"}`}
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                  </div>
                  <div className="col-md-12">
                    <input
                      type="email"
                      className={`form-control ${errors.email && "is-invalid"}`}
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
                      className={`form-control ${errors.password && "is-invalid"}`}
                      placeholder="Your Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                  </div>
                  <div className="col-md-12">
                    <input
                      type="text"
                      className={`form-control ${errors.contactNo && "is-invalid"}`}
                      placeholder="Your Contact Number"
                      value={contactNo}
                      onChange={(e) => setContactNo(e.target.value)}
                      required
                    />
                    {errors.contactNo && <div className="invalid-feedback">{errors.contactNo}</div>}
                  </div>
                  <div className="col-md-12">
                    <input
                      type="text"
                      className={`form-control ${errors.houseNo && "is-invalid"}`}
                      placeholder="Your House Number"
                      value={houseNo}
                      onChange={(e) => setHouseNo(e.target.value)}
                      required
                    />
                    {errors.houseNo && <div className="invalid-feedback">{errors.houseNo}</div>}
                  </div>
                  <div className="col-md-12 text-center">
                    <button type="submit">Signup</button>
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

export default Signup;

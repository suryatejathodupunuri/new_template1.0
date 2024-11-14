import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import heroImage from "../../assets/img/hero-img.png";

const Header = () => {
  const location = useLocation(); // Use useLocation to get the current pathname

  const handleLinkClick = () => {
    // Define the function or add your custom logic
    console.log("Link clicked!");
  };

  return (
    <>
      <section id="hero" className="hero align-items-center mt-4">
        <div className="container mt-4">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up">Bridging Languages</h1>
              <h2 data-aos="fade-up" data-aos-delay="400">Discover Seamless Language Services</h2>
              <div data-aos="fade-up" data-aos-delay="600">
                <div className="text-center text-lg-start">
                  <Link 
                    to="trynow" 
                    className={`btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center ${location.pathname === '/signup' ? 'active' : ''}`} 
                    onClick={handleLinkClick}
                  >
                    <span>Try Now</span>
                    <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
              <img src={heroImage} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;

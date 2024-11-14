import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/img/logo.png";

const Navbar = ({ setIsAuthenticated }) => { // Accept setIsAuthenticated to manage login state
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);
  const location = useLocation();
  //const [isDropdownOpen, setDropdownOpen] = useState(false);  // Dropdown toggle state

  // Effect to check the login state from localStorage
  useEffect(() => {
    const token = localStorage.getItem("token"); // Check for token in local storage
    setIsAuthenticated(!!token); // Update the authenticated state in the parent component
  }, [setIsAuthenticated]); // Add setIsAuthenticated to the dependency array

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };


    // Toggle dropdown menu
  //const toggleDropdownMenu = () => {
    //setDropdownOpen(!isDropdownOpen);
  //};

  // Close mobile menu on link click
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  // Handle logout functionality
  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear token from local storage
    setIsAuthenticated(false); // Update the authenticated state in the parent component
    handleLinkClick();
  };

  // Effect to handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Adjust scroll value for styling the navbar
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header id="header" className={`header fixed-top ${isScrolled ? "header-scrolled" : ""}`}>
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <Link to="/" className="logo d-flex align-items-center">
          <img src={logo} alt="Logo" />
          <span>Translation</span>
        </Link>

        <nav id="navbar" className={`navbar ${isMobileMenuOpen ? "navbar-mobile" : ""}`}>
          <ul>
            <li>
              <Link 
                to="/" 
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} 
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/trynow" 
                className={`nav-link ${location.pathname === '/Trynow' ? 'active' : ''}`} 
                onClick={handleLinkClick}
              >
                Try Now
              </Link>
            </li>
            {/* Uncomment the following block for dropdown functionality 
            <li className={`dropdown ${isDropdownOpen ? "dropdown-active" : ""}`}>
              <Link to="#" onClick={toggleDropdownMenu}>
                <span>Help</span> <i className="bi bi-chevron-down"></i>
              </Link>
              <ul className={`${isDropdownOpen ? "dropdown-active" : ""}`}>
                <li>
                  <Link 
                    to="/dropdown1" 
                    className={`dropdown-item ${location.pathname === '/dropdown1' ? 'active' : ''}`} 
                    onClick={handleLinkClick}
                  >
                    User Guide
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/dropdown2" 
                    className={`dropdown-item ${location.pathname === '/dropdown2' ? 'active' : ''}`} 
                    onClick={handleLinkClick}
                  >
                    User Manual
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/dropdown3" 
                    className={`dropdown-item ${location.pathname === '/dropdown3' ? 'active' : ''}`} 
                    onClick={handleLinkClick}
                  >
                    Documentations
                  </Link>
                </li>
              </ul>
            </li> */}
            <li>
              <Link 
                to="/contact-us" 
                className={`nav-link ${location.pathname === '/contact-us' ? 'active' : ''}`} 
                onClick={handleLinkClick}
              >
                Contact
              </Link>
            </li>

            {/* Render different menu items based on the login status */}
            {localStorage.getItem("token") ? ( // Check token directly for rendering
              <>
                <li>
                  <Link
                    to="/dashboard" // Make sure to correct the path
                    className={`getstarted scrollto ${location.pathname === '/dashboard' ? 'active' : ''}`}
                    onClick={handleLinkClick}
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/my-community" // Make sure to correct the path
                    className={`getstarted scrollto ${location.pathname === '/my-community' ? 'active' : ''}`}
                    onClick={handleLinkClick}
                  >
                    My Community
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="getstarted scrollto"
                    onClick={handleLogout}
                  >
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/login"
                    className={`getstarted scrollto ${location.pathname === '/login' ? 'active' : ''}`}
                    onClick={handleLinkClick}
                  >
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/signup" 
                    className={`getstarted scrollto ${location.pathname === '/signup' ? 'active' : ''}`} 
                    onClick={handleLinkClick}
                  >
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>

          <i
            className={`bi ${isMobileMenuOpen ? "bi-x" : "bi-list"} mobile-nav-toggle`}
            onClick={toggleMobileMenu}
          ></i>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

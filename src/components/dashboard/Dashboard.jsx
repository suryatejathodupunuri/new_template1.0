import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  // Function to handle navigation
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <section id="services" className="services">
      <div className="container text-center mt-xxl-5 mt-4" data-aos="fade-up">
        <h1 className="dashboard-title">Welcome to Neighborhood Dashboard</h1>
        <p className="dashboard-description">
          Here you can manage your community activities and view details.
        </p>
        <div className="row gy-4">
          {/* Service Cards */}
          <div className={`col-lg-4 col-md-6`} data-aos="fade-up" data-aos-delay="100">
            <div className={`service-box blue`} onClick={() => handleNavigation('/my-account')}>
              <i className="ri-discuss-line icon"></i>
              <h3>My Account</h3>
              <p>View your personal details.</p>
              <Link to="dashboard" className="read-more">
                <span>Read More</span> <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className={`col-lg-4 col-md-6`} data-aos="fade-up" data-aos-delay="200">
            <div className={`service-box orange`} onClick={() => handleNavigation('/view-community')}>
              <i className="ri-discuss-line icon"></i>
              <h3>View Community</h3>
              <p>Explore the different communities you can join.</p>
              <Link to="dashboard" className="read-more">
                <span>Read More</span> <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className={`col-lg-4 col-md-6`} data-aos="fade-up" data-aos-delay="300">
            <div className={`service-box green`} onClick={() => handleNavigation('/add-new-community')}>
              <i className="ri-discuss-line icon"></i>
              <h3>Add New Community</h3>
              <p>Create a new community and invite members.</p>
              <Link to="dashboard" className="read-more">
                <span>Read More</span> <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className={`col-lg-4 col-md-6`} data-aos="fade-up" data-aos-delay="400">
            <div className={`service-box red`} onClick={() => handleNavigation('/latest-post')}>
              <i className="ri-discuss-line icon"></i>
              <h3>Latest Post</h3>
              <p>Check out the latest posts from our community.</p>
              <Link to="dashboard" className="read-more">
                <span>Read More</span> <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className={`col-lg-4 col-md-6`} data-aos="fade-up" data-aos-delay="500">
            <div className={`service-box purple`} onClick={() => handleNavigation('/post-request')}>
              <i className="ri-discuss-line icon"></i>
              <h3>Post Request</h3>
              <p>Make a request to post in the community.</p>
              <Link to="dashboard" className="read-more">
                <span>Read More</span> <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className={`col-lg-4 col-md-6`} data-aos="fade-up" data-aos-delay="600">
            <div className={`service-box pink`} onClick={() => handleNavigation('/post-product')}>
              <i className="ri-discuss-line icon"></i>
              <h3>Post Product</h3>
              <p>Share and promote your products with the community.</p>
              <Link to="dashboard" className="read-more">
                <span>Read More</span> <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;

import React from "react";
import Header from "../../components/header/Header.jsx";
import servicesData from "../homeLanding/services.json"; // Import services data

// Main Home Component
const Home = () => {
  return (
    <>
      <Header />
      <main id="main">
        <section id="services" className="services">
          <div className="container" data-aos="fade-up">
            <header className="section-header">
              <h2>Features</h2>
              <p>Access various languages with our intuitive tool for precise communication.</p>
            </header>

            <div className="row gy-4">
              {servicesData.map((service, index) => (
                <div key={index} className={`col-lg-4 col-md-6`} data-aos="fade-up" data-aos-delay={`${(index + 1) * 100}`}>
                  <div className={`service-box ${service.color}`}>
                    <i className="ri-discuss-line icon"></i>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        
      </main>
    </>
  );
};

export default Home;

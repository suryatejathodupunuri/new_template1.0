import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header.jsx";
import servicesData from "../homeLanding/services.json"; // Import services data
import faqData from "../homeLanding/faq.json"; // Import FAQ data

// Main Home Component
const Home = () => {
  return (
    <>
      <Header />
      <main id="main">
        <section id="services" className="services">
          <div className="container" data-aos="fade-up">
            <header className="section-header">
              <h2>Our Services</h2>
              <p>Explore what we offer to enhance your journey with us</p>
            </header>

            <div className="row gy-4">
              {servicesData.map((service, index) => (
                <div key={index} className={`col-lg-4 col-md-6`} data-aos="fade-up" data-aos-delay={`${(index + 1) * 100}`}>
                  <div className={`service-box ${service.color}`}>
                    <i className="ri-discuss-line icon"></i>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <Link to="#" className="read-more">
                      <span>Read More</span> <i className="bi bi-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="faq">
          <div className="container" data-aos="fade-up">
            <header className="section-header">
              <h2>Frequently Asked Questions</h2>
              <p>Get answers to common queries about our community</p>
            </header>

            <div className="row">
              {faqData.map((faq, index) => (
                <div key={index} className="col-lg-6">
                  <div className="accordion accordion-flush" id={`faqlist${index}`}>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#faq-content-${index}`}
                        >
                          {faq.question}
                        </button>
                      </h2>
                      <div
                        id={`faq-content-${index}`}
                        className="accordion-collapse collapse"
                        data-bs-parent={`#faqlist${index}`}
                      >
                        <div className="accordion-body">{faq.answer}</div>
                      </div>
                    </div>
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

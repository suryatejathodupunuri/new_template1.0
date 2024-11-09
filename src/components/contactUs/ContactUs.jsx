import React from 'react';
import "../../globalStyled.css";

const ContactUs = () => {
  return (
    <section id="contact" className="contact mt-4">
        <div className="container mt-4">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <p>Contact Us</p>
        </header>

        <div className="row gy-4">
          <div className="col-lg-6">
            <div className="row gy-4">
              <div className="col-md-6">
                <div className="info-box">
                  <i className="bi bi-geo-alt"></i>
                  <h3>Address</h3>
                  <p>
                  Vindhya C4, Second Floor, CIE, 
                    <br />
                    IIIT Hyderabad Campus,500032.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box">
                  <i className="bi bi-telephone"></i>
                  <h3>Call Us</h3>
                  <p>
                  +91 - 99664 43729 
                    <br />
                  +91 - 99680 36443
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box">
                  <i className="bi bi-envelope"></i>
                  <h3>Email Us</h3>
                  <p>
                  info@ebhashasetu.com 
                    <br />
                  ebhashasetu@gmail.com
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box">
                  <i className="bi bi-clock"></i>
                  <h3>Open Hours</h3>
                  <p>
                    Monday - Saturday
                    <br />
                    9:00 AM - 05:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <form className="php-email-form">
              <div className="row gy-4">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Your Email"
                    required
                  />
                </div>

                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </div>

                <div className="col-md-12">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="6"
                    placeholder="Message"
                    required
                  />
                </div>

                <div className="col-md-12 text-center">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>

                  <button type="submit">Send Message</button>
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

export default ContactUs;

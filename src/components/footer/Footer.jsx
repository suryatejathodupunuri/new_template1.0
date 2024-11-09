import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";

const Footer = () => {
  return (
    <>
      <footer id="footer" className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-4 col-md-12 footer-info">
                <Link to="/" className="logo d-flex align-items-center">
                  <img src={logo} alt="Logo" />
                  <span>Translation</span>
                </Link>
                <p>
                  Our Technology Startup eBhasha has created Artificial
                  Intelligence (AI) powered Computer Aided Translation (CAT)
                  Platform and Processes, that leverages Natural Language
                  Processing (NLP) technology and Deep Learning, to
                  assist/enable Professional Translators to produce Publishable
                  Quality Content with minimal cognitive effort, and with far
                  better Turn Around Time (TAT) thereby increasing the
                  productivity.
                </p>
              </div>

              <div className="col-lg-3 col-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <Link to="#">Home</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <Link to="#">About us</Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-12 footer-contact text-center text-md-start">
                <h4>Contact Us</h4>
                <p>
                  <strong>Head Office</strong> - Hyderabad - eBhasha Setu Language Services Private
                  Ltd. Vindhya C4, Second Floor, CIE, IIIT Hyderabad
                  Campus,Gachibowli, Hyderabad-500032
                  <br />
                  <strong>Branch Office </strong> - Delhi NCR B 77-78, Sindhuja Building, 2nd
                  Floor,
                  Sector 6, Noida, UP 201301,India <br />
                  <br />
                  <strong>Phone:</strong> +91 - 99664 43729 / +91-99680 36443
                  <br />
                  <strong>Email:</strong> info@ebhashasetu.com / ebhashasetu@gmail.com
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>eBhasha Setu </span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">
            Designed by <Link to="https://ebhashasetu.com/">Ebhasha Setu Language Services Pvt Ltd</Link>
          </div>
        </div>
      </footer>

      <Link
        to="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </Link>
    </>
  );
};
export default Footer;

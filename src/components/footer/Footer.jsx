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
                <Link
                  to="/"
                  className="logo d-flex align-items-center"
                >
                  <img src={logo} alt="Logo" />
                  <span>NeighborHood</span>
                </Link>
                <p>
                  Connect, Engage, Thrive: Your Neighborhood Awaits! encourages community members to come together, fostering meaningful connections and active participation. It highlights the importance of collaboration and support, inviting individuals to discover the rich experiences their neighborhood has to offer while building lasting relationships.
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
                  A108 Adam Street <br />
                  New York, NY 535022
                  <br />
                  United States <br />
                  <br />
                  <strong>Phone:</strong> +1 5589 55488 55
                  <br />
                  <strong>Email:</strong> info@example.com
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
              <span>NeighborHood</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">
            Designed by{" "}
            <Link to="https://avishkar.tech/">Avishkar</Link>
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
}
export default Footer;
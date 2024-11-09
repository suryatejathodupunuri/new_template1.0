import React from 'react'
import { Link } from "react-router-dom";
import aboutImage from "../../assets/img/about.png"

export const About = () => {
  return (
    <>
    <main id="main">
        <section id="about" className="about mt-xxl-5 mt-4">
          <div className="container" data-aos="fade-up">
            <div className="row gx-0">
              <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
                <div className="content">
                  <h3>Who We Are</h3>
                  <h2>Connect, Engage, Thrive Your Neighborhood Awaits!</h2>
                  <p>
                    Encourages community members to come together, fostering meaningful connections and active participation. It highlights the importance of collaboration and support, inviting individuals to discover the rich experiences their neighborhood has to offer while building lasting relationships.
                  </p>
                  <div className="text-center text-lg-start">
                    <Link to="#" className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                      <span>Read More</span>
                      <i className="bi bi-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                <img src={aboutImage} className="img-fluid" alt=""/>
              </div>
            </div>
          </div>
        </section>
        
        {/* Updated Our Values Section */}
        <section id="values" className="values">
          <div className="container" data-aos="fade-up">
            <header className="section-header">
              <h2>Our Values</h2>
              <p>We believe in fostering a strong, inclusive community where everyone can thrive.</p>
            </header>
            <div className="row">
              <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
                <div className="box">
                  <img src="assets/img/values-1.png" className="img-fluid" alt=""/>
                  <h3>Collaboration & Support</h3>
                  <p>We emphasize working together to create a supportive network where everyone can contribute and receive help when needed.</p>
                </div>
              </div>
              <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="400">
                <div className="box">
                  <img src="assets/img/values-2.png" className="img-fluid" alt=""/>
                  <h3>Inclusivity & Respect</h3>
                  <p>Our community embraces diversity, ensuring every voice is heard and respected. We celebrate our differences and grow through understanding.</p>
                </div>
              </div>
              <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="600">
                <div className="box">
                  <img src="assets/img/values-3.png" className="img-fluid" alt=""/>
                  <h3>Growth & Learning</h3>
                  <p>We’re dedicated to personal and communal growth. Through shared knowledge, events, and mentorship, we help members develop new skills and perspectives.</p>
                </div>
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
                <div className="box">
                  <img src="assets/img/values-1.png" className="img-fluid" alt=""/>
                  <h3>Trust & Accountability</h3>
                  <p>We build trust through transparency, and we hold ourselves accountable for maintaining a safe, welcoming environment for all members.</p>
                </div>
              </div>
              <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="400">
                <div className="box">
                  <img src="assets/img/values-2.png" className="img-fluid" alt=""/>
                  <h3>Innovation & Creativity</h3>
                  <p>We encourage members to think creatively and explore new ideas, driving innovation that benefits the entire community.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        </main>
    </>
  )
}

export default About;

import {
  FaLink,
  FaBriefcase,
  FaGlobe,
  FaCheckCircle,
} from "react-icons/fa";

import aboutImage from "../assets/about.jpg";

import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">

      <div className="about-container">

        {/* LEFT CONTENT */}

        <div className="about-content">

          <div className="section-label">
            ABOUT ME
          </div>

          <h2>
            Who I Am
          </h2>

          <div className="section-line"></div>

          <p>
            I'm Nazim, a creative and detail-oriented Digital
            Solutions Developer with 7+ years of experience in
            Graphic Design, Web Design, Web Development, and
            digital services.
          </p>

          <p>
            I create modern, responsive, and user-friendly
            websites while combining design, programming,
            automation, and data to build practical digital
            solutions for businesses and individuals.
          </p>

          {/* QUICK STATS */}

          <div className="about-stats">

            <div className="about-stat">
              <FaLink />
              <span>7+ Years of Experience</span>
            </div>

            <div className="about-stat">
              <FaBriefcase />
              <span>2000+ Projects Completed</span>
            </div>

            <div className="about-stat">
              <FaGlobe />
              <span>Clients From 10+ Countries</span>
            </div>

            <div className="about-stat">
              <FaCheckCircle />
              <span>Quality & Client Satisfaction</span>
            </div>

          </div>

          <a href="#contact" className="about-btn">
            More About Me
          </a>

        </div>


        {/* RIGHT CONTENT */}

        <div className="about-visual">

          <div className="about-image-wrapper">

            <div className="about-image-glow"></div>

                <div className="about-image-placeholder">
                 <img
                  src={aboutImage}
                  alt="Nazim Uddin working on digital solutions"
                 className="about-image"
                  />
            </div>

          </div>


          {/* INFO CARD */}

          <div className="about-info-card">

            <div className="info-row">
              <strong>Name:</strong>
              <span>Nazim Uddin</span>
            </div>

            <div className="info-row">
              <strong>Location:</strong>
              <span>Bangladesh</span>
            </div>

            <div className="info-row">
              <strong>Email:</strong>
              <span>nazimplabon@gmail.com</span>
            </div>

            <div className="info-row">
              <strong>Freelance:</strong>
              <span className="available">
                Available
              </span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;
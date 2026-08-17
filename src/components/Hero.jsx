import {
  FaReact,
  FaPython,
  FaJsSquare,
  FaLinkedinIn,
  FaGithub,
  FaBehance,
  FaEnvelope,
  FaPaperPlane,
  FaArrowRight,
} from "react-icons/fa";

import { SiTailwindcss } from "react-icons/si";

import profileImage from "../assets/profile.png";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-container">

        {/* LEFT SIDE */}

        <div className="hero-content">

          <div className="hello-badge">
            Hello, I'm
          </div>

          <h1>
            Nazim <span>Uddin</span>
          </h1>

          <h2>
            Digital Solutions Developer
          </h2>

          <p className="hero-description">
            I design beautiful experiences, build powerful web
            applications and automate data to solve real-world
            problems.
          </p>

          <div className="hero-tags">
            <span>Graphic Designer</span>
            <span>•</span>
            <span>Web Developer</span>
            <span>•</span>
            <span>Python Developer</span>
            <span>•</span>
            <span>Data Automation</span>
          </div>

          <div className="hero-buttons">

            <a href="#contact" className="hire-btn">
              Hire Me
              <FaPaperPlane />
            </a>

            <a href="#projects" className="work-btn">
              View My Work
              <FaArrowRight />
            </a>

          </div>

          <div className="connect-text">
            Let's connect
          </div>

          <div className="social-links">

            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>

            <a href="#" aria-label="GitHub">
              <FaGithub />
            </a>

            <a href="#" aria-label="Behance">
              <FaBehance />
            </a>

            <a href="mailto:hello@nazimuddin.com" aria-label="Email">
              <FaEnvelope />
            </a>

          </div>

        </div>


        {/* RIGHT SIDE */}

        <div className="hero-visual">

          <div className="purple-glow"></div>

          <div className="profile-circle"></div>

          <img
            src={profileImage}
            alt="Nazim Uddin"
            className="profile-image"
          />


          {/* React */}

          <div className="tech-icon react-icon">
            <FaReact />
          </div>


          {/* Python */}

          <div className="tech-icon python-icon">
            <FaPython />
          </div>


          {/* JavaScript */}

          <div className="tech-icon javascript-icon">
            <FaJsSquare />
          </div>


          {/* Tailwind */}

          <div className="tech-icon tailwind-icon">
            <SiTailwindcss />
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;
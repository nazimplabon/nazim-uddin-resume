import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">

        <a href="#home" className="navbar-logo">
          <span className="logo-icon">&lt;/&gt;</span>
          <span>Nazim Uddin</span>
        </a>

        <nav className="navbar-menu">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          href="/Nazim-Uddin-CV.pdf"
          className="download-cv"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download CV
        </a>

      </div>
    </header>
  );
}

export default Navbar;
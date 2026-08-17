import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* BRAND */}

        <div className="footer-brand">

          <a href="#home" className="footer-logo">
            Nazim<span>.</span>
          </a>

          <p>
            Graphic & Web Developer | Data Analytics
          </p>

          <p className="footer-description">
            Creating modern websites, digital experiences,
            graphic designs, and data-driven solutions.
          </p>

        </div>


        {/* QUICK LINKS */}

        <div className="footer-column">

          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>

        </div>


        {/* SERVICES */}

        <div className="footer-column">

          <h3>Services</h3>

          <a href="#services">Web Design</a>
          <a href="#services">Web Development</a>
          <a href="#services">Graphic Design</a>
          <a href="#services">Python Automation</a>
          <a href="#services">Data Analytics</a>

        </div>


        {/* CONTACT */}

        <div className="footer-column">

          <h3>Let's Connect</h3>

          <p className="footer-contact-text">
            Have a project or idea? I'd love to hear
            from you.
          </p>

          <a
            href="#contact"
            className="footer-contact-button"
          >
            Start a Project
            <span>→</span>
          </a>

        </div>

      </div>


      {/* BOTTOM */}

      <div className="footer-bottom">

        <div className="footer-bottom-container">

          <p>
            © {currentYear} Nazim Uddin. All rights reserved.
          </p>

          <p>
            Designed & Developed by Nazim Uddin
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = "YOUR-EMAIL@example.com";

    const body = `
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
    `;

    const mailtoLink =
      `mailto:${email}` +
      `?subject=${encodeURIComponent(formData.subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        <div className="contact-info">

          <span className="contact-label">
            GET IN TOUCH
          </span>

          <h2>
            Let's Build Something
            <span> Great Together.</span>
          </h2>

          <div className="contact-line"></div>

          <p className="contact-description">
            Have a project, business idea, or digital challenge?
            Let's discuss how I can help turn your idea into a
            professional digital solution.
          </p>

          <div className="contact-details">

            <a
              href="mailto:YOUR-EMAIL@example.com"
              className="contact-item"
            >
              <div className="contact-icon">
                ✉
              </div>

              <div>
                <span>Email</span>
                <strong>YOUR-EMAIL@example.com</strong>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <div className="contact-icon">
                in
              </div>

              <div>
                <span>LinkedIn</span>
                <strong>Connect with me</strong>
              </div>
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <div className="contact-icon">
                GH
              </div>

              <div>
                <span>GitHub</span>
                <strong>View my projects</strong>
              </div>
            </a>

          </div>

        </div>


        <div className="contact-form-wrapper">

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <div className="form-row">

              <div className="form-group">

                <label htmlFor="name">
                  Your Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />

              </div>


              <div className="form-group">

                <label htmlFor="email">
                  Email Address
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />

              </div>

            </div>


            <div className="form-group">

              <label htmlFor="subject">
                Subject
              </label>

              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What can I help you with?"
                required
              />

            </div>


            <div className="form-group">

              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                required
              ></textarea>

            </div>


            <button
              type="submit"
              className="contact-submit"
            >
              Send Message
              <span>→</span>
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;
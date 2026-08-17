import "./Experience.css";

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">

        {/* Section Heading */}
        <div className="section-heading">
          <span>EXPERIENCE</span>
          <h2>My Experience</h2>
          <div className="heading-line"></div>
        </div>

        {/* Timeline */}
        <div className="experience-timeline">

          {/* Experience 1 */}
          <div className="experience-item">

            <div className="timeline-dot"></div>

            <div className="experience-card">

              <div className="experience-icon">
                💼
              </div>

              <div className="experience-content">

                <div className="experience-top">
                  <h3>Freelance Digital Solutions Developer</h3>
                  <span>2019 – Present</span>
                </div>

                <h4>Self Employed</h4>

                <p>
                  Working with international clients on web design,
                  web development, graphic design, automation, and
                  data-related projects.
                </p>

              </div>

            </div>

          </div>


          {/* Experience 2 */}
          <div className="experience-item">

            <div className="timeline-dot"></div>

            <div className="experience-card">

              <div className="experience-icon">
                💻
              </div>

              <div className="experience-content">

                <div className="experience-top">
                  <h3>Graphic & Web Designer</h3>
                  <span>2017 – 2019</span>
                </div>

                <h4>Various Marketplaces</h4>

                <p>
                  Provided professional graphic design and web design
                  solutions to clients worldwide through Fiverr,
                  Upwork and Freelancer.
                </p>

              </div>

            </div>

          </div>


          {/* Experience 3 */}
          <div className="experience-item">

            <div className="timeline-dot"></div>

            <div className="experience-card">

              <div className="experience-icon">
                ⚙️
              </div>

              <div className="experience-content">

                <div className="experience-top">
                  <h3>Digital Services & Automation</h3>
                  <span>2022 – Present</span>
                </div>

                <h4>Independent Projects</h4>

                <p>
                  Developing practical digital solutions using
                  Python, Django, React, data analytics, web scraping
                  and workflow automation.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;
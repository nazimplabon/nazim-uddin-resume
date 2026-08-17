import "./Services.css";

function Services() {
  const services = [
    {
      number: "01",
      title: "Web Development",
      description:
        "Custom, responsive websites and web applications built for businesses, professionals, and personal brands.",
      skills: [
        "React",
        "JavaScript",
        "Python",
        "Django",
      ],
    },

    {
      number: "02",
      title: "Web Design",
      description:
        "Modern and user-friendly website designs focused on clean layouts, responsive experiences, and strong visual presentation.",
      skills: [
        "UI Design",
        "WordPress",
        "Elementor",
        "HTML / CSS",
      ],
    },

    {
      number: "03",
      title: "Graphic Design",
      description:
        "Professional visual designs that help businesses build a strong and consistent brand identity.",
      skills: [
        "Logo Design",
        "Branding",
        "Flyer & Brochure",
        "Photo Editing",
      ],
    },

    {
      number: "04",
      title: "Data Analytics & Automation",
      description:
        "Transforming data into useful insights and automating repetitive tasks to improve efficiency and productivity.",
      skills: [
        "Python",
        "Excel",
        "Data Analysis",
        "Web Scraping",
      ],
    },
  ];

  return (
    <section className="services-section" id="services">

      <div className="services-container">

        {/* HEADER */}

        <div className="services-header">

          <span className="services-label">
            WHAT I DO
          </span>

          <h2>
            Digital Solutions
          </h2>

          <div className="services-line"></div>

          <p>
            I combine design, development, and data to create
            practical digital solutions that help businesses
            work better and grow online.
          </p>

        </div>


        {/* SERVICES */}

        <div className="services-grid">

          {services.map((service) => (

            <article
              className="service-card"
              key={service.number}
            >

              <div className="service-top">

                <span className="service-number">
                  {service.number}
                </span>

                <div className="service-arrow">
                  ↗
                </div>

              </div>


              <h3>
                {service.title}
              </h3>


              <p className="service-description">
                {service.description}
              </p>


              <div className="service-skills">

                {service.skills.map((skill) => (

                  <span key={skill}>
                    {skill}
                  </span>

                ))}

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;
import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Assignment Cover Generator",
      category: "Web Application",
      description:
        "A Django-based web application that generates professional assignment cover pages with live preview and downloadable PDF output.",
      technologies: ["Python", "Django", "HTML", "CSS"],
      image: "/projects/assignment-cover.jpg",
      link: "#",
    },

    {
      title: "NexaNDigital",
      category: "Business Website",
      description:
        "A modern digital solutions website designed for web development, graphic design, digital marketing, and automation services.",
      technologies: ["React", "JavaScript", "CSS"],
      image: "/projects/nexandigital.jpg",
      link: "#",
    },

    {
      title: "Data Analytics Dashboard",
      category: "Data Analytics",
      description:
        "An interactive dashboard for transforming raw data into meaningful insights through analysis, visualization, and reporting.",
      technologies: ["Python", "Excel", "Data Analytics"],
      image: "/projects/analytics-dashboard.jpg",
      link: "#",
    },

    {
      title: "Restaurant Website",
      category: "Web Design",
      description:
        "A responsive restaurant website with a modern interface, menu presentation, contact information, and mobile-friendly design.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "/projects/restaurant.jpg",
      link: "#",
    },

    {
      title: "Portfolio Website",
      category: "Web Development",
      description:
        "A professional personal portfolio designed to showcase skills, experience, services, projects, and digital solutions.",
      technologies: ["React", "JavaScript", "CSS"],
      image: "/projects/portfolio.jpg",
      link: "#",
    },

    {
      title: "Python Web Automation",
      category: "Automation",
      description:
        "Custom Python automation solutions for web scraping, data collection, processing, and repetitive business workflows.",
      technologies: ["Python", "Automation", "Web Scraping"],
      image: "/projects/python-automation.jpg",
      link: "#",
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">

        {/* HEADER */}

        <div className="projects-header">

          <div>
            <span className="projects-label">
              MY WORK
            </span>

            <h2>Featured Projects</h2>

            <div className="projects-line"></div>
          </div>

          <p>
            A selection of projects showcasing my experience
            in web development, design, automation, and data.
          </p>

        </div>


        {/* PROJECT GRID */}

        <div className="projects-grid">

          {projects.map((project, index) => (

            <article
              className="project-card"
              key={index}
            >

              {/* IMAGE */}

              <div className="project-image">

                <img
                  src={project.image}
                  alt={project.title}
                />

                <div className="project-overlay">

                  <a
                    href={project.link}
                    className="project-view"
                  >
                    View Project →
                  </a>

                </div>

              </div>


              {/* CONTENT */}

              <div className="project-content">

                <span className="project-category">
                  {project.category}
                </span>

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>


                {/* TECHNOLOGIES */}

                <div className="project-technologies">

                  {project.technologies.map(
                    (technology, techIndex) => (

                      <span key={techIndex}>
                        {technology}
                      </span>

                    )
                  )}

                </div>

              </div>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;
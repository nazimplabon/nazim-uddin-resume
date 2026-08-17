import { useState } from "react";
import "./Skills.css";

function Skills() {
  const skillCategories = {
    Frontend: [
      { name: "React", level: "90%" },
      { name: "HTML", level: "95%" },
      { name: "CSS", level: "90%" },
      { name: "JavaScript", level: "85%" },
      { name: "Tailwind CSS", level: "90%" },
    ],

    Backend: [
      { name: "Python", level: "90%" },
      { name: "Django", level: "85%" },
      { name: "REST API", level: "85%" },
      { name: "Database", level: "80%" },
    ],

    Design: [
      { name: "Graphic Design", level: "95%" },
      { name: "Photoshop", level: "95%" },
      { name: "Illustrator", level: "95%" },
      { name: "InDesign", level: "90%" },
      { name: "Web Design", level: "95%" },
    ],

    "Data Analytics & Automation": [
      { name: "Data Analytics", level: "85%" },
      { name: "Excel", level: "95%" },
      { name: "Web Scraping", level: "85%" },
      { name: "Data Cleaning", level: "90%" },
      { name: "Python Automation", level: "85%" },
    ],
  };

  const [activeCategory, setActiveCategory] =
    useState("Frontend");

  const currentSkills = skillCategories[activeCategory];

  return (
    <section className="skills-section" id="skills">

      <div className="skills-container">

        {/* HEADER */}

        <div className="skills-header">

          <span className="skills-label">
            SKILLS
          </span>

          <h2>My Skills</h2>

          <div className="skills-line"></div>

        </div>


        {/* TABS */}

        <div className="skills-tabs">

          {Object.keys(skillCategories).map((category) => (

            <button
              key={category}
              type="button"
              className={`skill-tab ${
                activeCategory === category
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setActiveCategory(category)
              }
            >
              {category}
            </button>

          ))}

        </div>


        {/* SKILLS */}

        <div className="skills-grid">

          {currentSkills.map((skill) => (

            <div
              className="skill-card"
              key={skill.name}
            >

              <div className="skill-info">

                <span className="skill-name">
                  {skill.name}
                </span>

                <span className="skill-percent">
                  {skill.level}
                </span>

              </div>


              <div className="skill-bar">

                <div
                  className="skill-progress"
                  style={{
                    width: skill.level,
                  }}
                ></div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;
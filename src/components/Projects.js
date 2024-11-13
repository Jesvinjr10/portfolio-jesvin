import React from "react";
import "./project-section.css";
// Import your project images here
// import logo from "../projectphotos/userdata.png";
// import logo2 from "../projectphotos/ajax.png";
// import logo3 from "../projectphotos/studentidcard.png";

const Projects = () => {
  const projects = [
    {
      title: "USERDATA",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus cumque magnam consequatur illum blanditiis nihil.",
      // logo: logo,
      color: "#A5DD9B",
    },
    {
      title: "DATA FROM API USING AJAX",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus cumque magnam consequatur illum blanditiis nihil.",
      // logo: logo2,
      color: "#A5DD9B",
    },
    {
      title: "STUDENT ID CARD",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus cumque magnam consequatur illum blanditiis nihil.",
      // logo: logo3,
      color: "#A5DD9B",
    },
    {
      title: "ANOTHER PROJECT",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus cumque magnam consequatur illum blanditiis nihil.",
      // logo: logo3,
      color: "#A5DD9B",
    },
  ];

  return (
    <div id="projects" className="py-1">
      <div className="project-section">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <div className="card-inner">
              <div className="card-front">
                <img
                  src={project.logo}
                  alt={`${project.title} Logo`}
                  className="logo"
                />
              </div>
              <div className="card-back" style={{ backgroundColor: project.color }}>
                <h2 className="text-dark">{project.title}</h2>
                <p className="text-dark">{project.description}</p>
                <a href="null">VIEW MY PROJECT</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

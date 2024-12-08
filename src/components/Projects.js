import React from "react";
import logo6 from "../assets/id5.png" // Correct path to the image
import logo1 from "../assets/sxc.png"
import logo2 from "../assets/id1.png"
import logo3 from "../assets/id2.png"
import logo4 from "../assets/id3.png"
import logo5 from "../assets/id4.png"


import "./project-section.css";

const Projects = () => {
  const projects = [
    {
      title: "SXC ALUMNI MANAGNMENT SYSTEM ",
      description:
        "Fetching data from an API using AJAX for seamless web experience.",
      image: logo1,
      link: "#",
    },
    {
      title: "STUDENT ID CARD",
      description: "A project for creating digital student ID cards.",
      image: logo2,
      link: "#",
    },
    {
      title: "UI/UX DESIGN PROJECT",
      description: "An innovative UI/UX design project.",
      image: logo3,
      link: "#",
    },
    {
      title: "UI/UX DESIGN PROJECT",
      description: "An innovative UI/UX design project.",
      image: logo4,
      link: "#",
    },
    {
      title: "UI/UX DESIGN PROJECT",
      description: "An innovative UI/UX design project.",
      image: logo5,
      link: "#",
    },
    {
      title: "UI/UX DESIGN PROJECT",
      description: "An innovative UI/UX design project.",
      image: logo6,
      link: "#",
    },
  ];

  return (
    <div className="container-fluid py-5" id="projects" style={{ backgroundColor: "#40534C" }}>
      <h2 className="text-center text-light mb-4">My Projects</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-6 col-lg-4 mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              <img
                src={project.image}
                alt={project.title}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <a href={project.link} className="btn btn-primary">
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

import React from "react";
import logo from "../assets/backhome.jpg"; // Correct path to the image
import "./project-section.css";

const Projects = () => {
  const projects = [
    {
      title: "USERDATA",
      description:
        "This project demonstrates fetching and displaying user data dynamically.",
      image: logo,
      link: "#",
    },
    {
      title: "API USING AJAX",
      description:
        "Fetching data from an API using AJAX for seamless web experience.",
      image: logo,
      link: "#",
    },
    {
      title: "STUDENT ID CARD",
      description: "A project for creating digital student ID cards.",
      image: logo,
      link: "#",
    },
    {
      title: "UI/UX DESIGN PROJECT",
      description: "An innovative UI/UX design project.",
      image: logo,
      link: "#",
    },
  ];

  return (
    <div className="container-fluid py-5" style={{ backgroundColor: "#40534C" }}>
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

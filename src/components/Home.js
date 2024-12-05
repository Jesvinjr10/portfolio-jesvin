// src/components/Home.js
import React from 'react';
import './Home.css';
import 'animate.css';

const Home = () => {
  const handleViewProjects = () => {
    window.location.href = '/#projects';
  };

  const handleLinkedIn = () => {
    window.open('https://www.linkedin.com/in/your-profile', '_blank');
  };

  return (
    <section id="home" className="home-section">
      <div className="overlay"></div> {/* Added overlay for better text contrast */}
      <div className="container text-center">
        <h1 className="animate__animated animate__fadeIn">Welcome to My Portfolio</h1>
        <p className="animate__animated animate__fadeIn animate__delay-1s">
          I am a Full-Stack Developer specialized in React.js
        </p>
        <div className="button-container">
          <button className="btn btn-primary" onClick={handleViewProjects}>
            View Projects
          </button>
          <button className="btn btn-secondary" onClick={handleLinkedIn}>
            LinkedIn
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;

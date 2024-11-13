// src/components/Home.js
import React from 'react';
import './Home.css'; // Import the CSS file
import 'animate.css'; // Ensure animate.css is imported

const Home = () => {
  const handleViewProjects = () => {
    // Replace with your projects page URL or functionality
    window.location.href = '/projects'; // Example: Redirect to the projects page
  };

  const handleLinkedIn = () => {
    // Replace with your LinkedIn profile URL
    window.open('https://www.linkedin.com/in/your-profile', '_blank');
  };

  return (
    <section id="home" className="home-section d-flex align-items-center" style={{ height: '100vh' }}>
      <div className="container text-center">
        <h1 className="animate__animated animate__fadeIn">Welcome to My Portfolio</h1>
        <p className="animate__animated animate__fadeIn animate__delay-1s">
          I am a Full-Stack Developer specialized in React.js
        </p>
        <div className="button-container">
          <button className="btn btn-primary animate__animated animate__bounceIn" onClick={handleViewProjects}>
            View Projects
          </button>
          <button className="btn btn-secondary animate__animated animate__bounceIn animate__delay-1s" onClick={handleLinkedIn}>
            LinkedIn
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;

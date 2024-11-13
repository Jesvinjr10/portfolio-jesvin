import React from 'react';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';
import './PortfolioNavbar.css';
import profilePic from '../jesvin.jpg';
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope, FaTools } from 'react-icons/fa';

const PortfolioNavbar = () => {
  return (
    <BootstrapNavbar expand="lg" fixed="top" className="navbar-animate">
      <BootstrapNavbar.Brand className="d-flex align-items-center" style={{ marginLeft: '20px' }}>
        <img
          src={profilePic}
          alt="Profile"
          className="profile-pic"
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            marginRight: '15px',
            border: '2px solid #fff',
          }}
        />
        <span className="brand-text" style={{ color: '#fff' }}>JESVIN L JOSE</span>
      </BootstrapNavbar.Brand>

      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" className="toggle-animate" />
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home" className="nav-link-animate">
            <FaHome className="icon" /> Home
          </Nav.Link>
          <Nav.Link href="#about" className="nav-link-animate">
            <FaUser className="icon" /> About
          </Nav.Link>
          <Nav.Link href="#skills" className="nav-link-animate">
            <FaTools className="icon" /> Skills
          </Nav.Link>
          <Nav.Link href="#projects" className="nav-link-animate">
            <FaProjectDiagram className="icon" /> Projects
          </Nav.Link>
          <Nav.Link href="#contact" className="nav-link-animate">
            <FaEnvelope className="icon" /> Contact
          </Nav.Link>
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
};

export default PortfolioNavbar;

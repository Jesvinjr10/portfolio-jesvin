// src/components/About.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaWhatsapp, FaEnvelope, FaGitlab } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <div id="about" className="about-background">
      <Container className="my-5 about-section">
        <Row>
          <Col>
            <h2 className="text-center animate__animated animate__slideInLeft">About Me</h2>
            <p className="text-center" style={{ color: "black" }}>
              I am a full-stack developer with expertise in building responsive web applications using React, Node.js, and modern technologies.
            </p>

            {/* Social Media Links */}
            <div className="text-center my-4">
              <h5>Connect with me:</h5>
              <a
                href="https://www.instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 social-icon"
              >
                <FaInstagram size={30} />
              </a>
              <a
                href="https://wa.me/yourphonenumber"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 social-icon"
              >
                <FaWhatsapp size={30} />
              </a>
              <a href="mailto:your-email@gmail.com" className="mx-2 social-icon">
                <FaEnvelope size={30} />
              </a>
              <a
                href="https://gitlab.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 social-icon"
              >
                <FaGitlab size={30} />
              </a>
            </div>

            {/* Centered Download Resume Button */}
            <div className="text-center my-4 d-flex justify-content-center">
              <a href="/Resume.pdf" download className="btn-4" data-tooltip="Size: 20Mb">
                <div className="button-wrapper">
                  <div className="text">Download</div>
                  <span className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="img"
                      width="2em"
                      height="2em"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
                      ></path>
                    </svg>
                  </span>
                </div>
              </a>
            </div>
            
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;

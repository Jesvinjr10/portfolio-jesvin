import React from 'react';
import 'animate.css'; // Import Animate.css
import './Skills.css'; // Import the CSS file

const Skills = () => {
  return (
    <section id="skills" className="py-5">
      <div className="container">
        <h2 className="text-center animate__animated animate__fadeIn">Skills</h2>
        <div className="row">
          {/* Skill Card */}
          <div className="col-md-4">
            <div className="card animate__animated animate__fadeInLeft animate__delay-1s" style={{ backgroundColor: '#1A3636', color: '#D6BD98',  borderRadius:'6px 6px 6px 6px'}}>
              <div className="card-body">
                <h4 className="card-title">REACT JS</h4>
              </div>
            </div>
          </div>

          {/* Skill Card */}
          <div className="col-md-4">
            <div className="card animate__animated animate__fadeInLeft animate__delay-2s" style={{ backgroundColor: '#1A3636', color: '#D6BD98' }}>
              <div className="card-body">
                <h4 className="card-title">PHP</h4>
              </div>
            </div>
          </div>

          {/* Skill Card */}
          <div className="col-md-4">
            <div className="card animate__animated animate__fadeInLeft animate__delay-3s" style={{ backgroundColor: '#1A3636', color: '#D6BD98' }}>
              <div className="card-body">
                <h4 className="card-title">MYSQL</h4>
              </div>
            </div>
          </div>

          {/* Additional Skill Cards */}
          <div className="col-md-4">
            <div className="card animate__animated animate__fadeInLeft animate__delay-3s" style={{ backgroundColor: '#1A3636', color: '#D6BD98' }}>
              <div className="card-body">
                <h4 className="card-title">HTML</h4>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card animate__animated animate__fadeInLeft animate__delay-3s" style={{ backgroundColor: '#1A3636', color: '#D6BD98' }}>
              <div className="card-body">
                <h4 className="card-title">CSS</h4>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card animate__animated animate__fadeInLeft animate__delay-3s" style={{ backgroundColor: '#1A3636', color: '#D6BD98' }}>
              <div className="card-body">
                <h4 className="card-title">BOOTSTRAP</h4>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card animate__animated animate__fadeInLeft animate__delay-3s" style={{ backgroundColor: '#1A3636', color: '#D6BD98' }}>
              <div className="card-body">
                <h4 className="card-title">JAVASCRIPT</h4>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card animate__animated animate__fadeInLeft animate__delay-3s" style={{ backgroundColor: '#1A3636', color: '#D6BD98' }}>
              <div className="card-body">
                <h4 className="card-title">JQUERY</h4>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card animate__animated animate__fadeInLeft animate__delay-3s" style={{ backgroundColor: '#1A3636', color: '#D6BD98' }}>
              <div className="card-body">
                <h4 className="card-title">GITLAB</h4>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card animate__animated animate__fadeInLeft animate__delay-3s" style={{ backgroundColor: '#1A3636', color: '#D6BD98' }}>
              <div className="card-body">
                <h4 className="card-title">UI/UX</h4>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card animate__animated animate__fadeInLeft animate__delay-3s" style={{ backgroundColor: '#1A3636', color: '#D6BD98' }}>
              <div className="card-body">
                <h4 className="card-title">MUI</h4>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card animate__animated animate__fadeInLeft animate__delay-3s" style={{ backgroundColor: '#1A3636', color: '#D6BD98' }}>
              <div className="card-body">
                <h4 className="card-title">REDUX</h4>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card animate__animated animate__fadeInLeft animate__delay-3s" style={{ backgroundColor: '#1A3636', color: '#D6BD98' }}>
              <div className="card-body">
                <h4 className="card-title">AXIOS</h4>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card animate__animated animate__fadeInLeft animate__delay-3s" style={{ backgroundColor: '#1A3636', color: '#D6BD98' }}>
              <div className="card-body">
                <h4 className="card-title">HOOKS</h4>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card animate__animated animate__fadeInLeft animate__delay-3s" style={{ backgroundColor: '#1A3636', color: '#D6BD98' }}>
              <div className="card-body">
                <h4 className="card-title">ROUTER</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

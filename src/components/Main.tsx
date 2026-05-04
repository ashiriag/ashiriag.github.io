import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Main.scss';
import headshot from '../assets/images/headshot.jpg';

function Main() {
  const focusAreas = [
    "Robotics perception",
    "Autonomous systems",
    "Motion planning",
    "Simulation"
  ];

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={headshot} alt="Ashiria Goel" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/ashiriag" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/ashiria-goel/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:agoel3@caltech.edu"><EmailIcon/></a>
          </div>
          <h1>Ashiria Goel</h1>
          <p className="summary">CS + Robotics @ Caltech</p>
          <p className="headline">Robotics and software systems focused on perception, planning, and control.</p>
          <div className="focus-tags">
            {focusAreas.map((area) => (
              <span key={area}>{area}</span>
            ))}
          </div>

          <div className="mobile_social_icons">
            <a href="https://github.com/ashiriag" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/ashiria-goel/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:agoel3@caltech.edu"><EmailIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

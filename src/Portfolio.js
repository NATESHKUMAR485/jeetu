import React from 'react';
import './Portfolio.css';
import profilePic from './profile.png'; // Make sure to add your photo to the src folder and rename it to profile.jpg

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <img src={profilePic} alt="Profile" className="profile-pic" />
      <h1 className="name">Jetender Kumar</h1>
      <p className="title">Web Developer</p>
      <p className="description">
        I am a passionate web developer with experience in creating dynamic web applications using modern technologies.
      </p>


      <div className="education">
        <h2>Education</h2>
        <ul>
          <li><strong>Intermediate in Computer Science</strong> - Suffa Institue Karachi, 2025</li>
          <li><strong>Relevant Coursework:</strong> Mathematics, Programming, Web development, graphic designing...</li>
        </ul>
      </div>

      <div className="social-links">
        <h2>Connect with Me</h2>
        <a href="https://www.facebook.com/profile.php?id=61555855944475&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://www.instagram.com/kumarjeteender?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">Instagram</a>

        

      </div>


    </div>
    
  );
};

export default Portfolio;

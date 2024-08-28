import React from 'react';
import './Portfolio.css';
import profilePic from './profile.png'; // Make sure to add your photo to the src folder and rename it to profile.jpg

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <img src={profilePic} alt="Profile" className="profile-pic" />
      <h1 className="name">Jeetu</h1>
      <p className="description">
        I am a passionate web developer with experience in creating dynamic web applications using modern technologies.
      </p>
    </div>
  );
};

export default Portfolio;

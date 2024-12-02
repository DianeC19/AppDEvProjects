import React from 'react';
import profilePic from './assets/unnamed.webp'; // Adjust the path as necessary
import facebookIcon from './assets/facebook.png'; // Example social media icon
import twitterIcon from './assets/instagram.jfif'; // Example social media icon
import messengerIcon from './assets/messenger.jfif'; // Messenger icon
import codingImage from './assets/1.jpg'; // Example image for coding
import designImage from './assets/2.jpg'; // Example image for design
import musicImage from './assets/3.jpg'; // Example image for music
import travelImage from './assets/4.jpg'; // Example image for traveling


const Profile = ({ name, bio, interests }) => {
    const interestContent = [
      { title: "Coding", image: codingImage },
      { title: "Design", image: designImage },
      { title: "Music", image: musicImage },
      { title: "Traveling", image: travelImage },
    ];
  
    return (
      <div className="profile-container">
        <div className="profile-header">
          <img src={profilePic} alt="Profile" className="profile-image" />
          <h1 className="profile-name">{name}</h1>
        </div>
        <p className="profile-bio">{bio}</p>
  
        <h2 className="interests-title">Interests</h2>
        <ul className="interests-list">
          {interests.map((interest, index) => (
            <li key={index} className="interest-item">{interest}</li>
          ))}
        </ul>
        <section id="gallery">
        <h2 className="gallery-title">Gallery</h2>
        <div className="gallery">
          {interestContent.map((interest, index) => (
            <div key={index} className="gallery-item">
              <img src={interest.image} alt={interest.title} className="gallery-image" />
              <h3 className="interest-title">{interest.title}</h3>
            </div>
          ))}
        </div>
        </section>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" className="social-icon" />
          </a>
          <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
            <img src={messengerIcon} alt="Messenger" className="social-icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Instagram" className="social-icon" />
          </a>
        </div>
        
        <button className="profile-button" onClick={() => alert('Contact form coming soon!')}>Contact</button>
      </div>
    );
  };
  
  export default Profile;
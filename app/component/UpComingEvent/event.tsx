'use client'

import React from 'react';
import './event.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Event() {
  useEffect(() => {
    AOS.init({ duration: 1900 });
  }, []);

    const [showFullText, setShowFullText] = useState(false);

  const handleToggle = () => {
    setShowFullText(!showFullText);
  };

const description = `A brief orientation about A Level's Computer Club (ALCC) to new members of the club.\n1. Introduction and Interaction\n2. Club Activities\n3. Future Event Discussion`;

  const shortDescription = description.slice(0, 85) + '...';
    return (
        <div className="main2">
            <br />
            <div className="event">
                <h1 data-aos="fade-up">Upcoming Events</h1>
            </div>
            <div className="details">
                 <div className="card-container"data-aos="fade-up">
      <div className="card-image">
        <img src="https://computerclubkec.github.io/assets/images/events/learning-utsav-2024/thumbnail.png" alt="Learning Utsav Flyer" />
      </div>
      <div className="card-content">
        <p className="card-date">📅 Thu, Oct 3 - Sun, Nov 3, 2024</p>
        <h2 className="card-title">Orientation for New Members</h2>
        <p className="card-description">
  {(showFullText ? description : shortDescription)
    .split('\n')
    .map((line, idx) => (
      <React.Fragment key={idx}>
        {line}
        <br />
      </React.Fragment>
    ))}
  <button className="read-more-btn" onClick={handleToggle}>
    {showFullText ? 'Show Less' : 'Read More'}
  </button>
</p>
        <p className="card-registrations"> </p>
        <div className="card-buttons">
          <button className="register-button">📝 Register</button>
          <button className="calendar-button">📅 Add to Calendar</button>
        </div>
      </div>
    </div>
        </div>
        </div>
    )
}
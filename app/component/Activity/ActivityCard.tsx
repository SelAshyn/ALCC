'use client'

import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useState, useEffect } from 'react';
import './ActivityCard.css';

interface ActivityCardProps {
  date: string;
  title: string;
  description: string;
  participants: string;
  imageUrl: string;
}

interface ActivityCardProps {
  date: string;
  title: string;
  description: string;
  participants: string;
  imageUrl: string;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ date, title, description, participants, imageUrl }) => {
    
  useEffect(() => {
    AOS.init({ duration: 1900 });
  }, []);

  const [showFull, setShowFull] = useState(false);

  const toggleReadMore = () => setShowFull(!showFull);

  const shortDesc = description.length > 110 ? description.slice(0, 110) + '...' : description;

  return (
    <div className="activity-card" data-aos="fade-up">
      <img className="activity-image" src={imageUrl} alt={title} />
      <div className="activity-details">
        <p className="activity-date">📅 {date}</p>
        <h3 className="activity-title">{title}</h3>
        <p className="activity-description">
          {showFull ? description : shortDesc}
          {description.length > 110 && (
            <button className="read-more-btn" onClick={toggleReadMore}>
              {showFull ? ' Show Less' : ' Read More'}
            </button>
          )}
        </p>
        {participants && <p className="activity-participants">{participants}</p>}
      </div>
    </div>
    
  );
};

export default ActivityCard;
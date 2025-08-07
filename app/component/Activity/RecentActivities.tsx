'use client'

import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import ActivityCard from './ActivityCard';
import './ActivityCard.css';

const activities = [

  {
    date: 'Tue, July 23, 2024',
    title: 'SandBox | SXC',
    description: 'KEC Computer Club visited Bhoos Games, Nepal’s top game development company. We explored their organizational structure and workflows.',
    participants: '10 Participants',
    imageUrl: 'https://raw.githubusercontent.com/SelAshyn/ALCC/refs/heads/main/Copy%20of%20DSC_0341.jpg',
  },
  {
    date: 'Fri, July 12, 2024',
    title: 'Community Outreach: Practical Skills in Prompt Engineering',
    description: 'Get ready for an exciting 36-hour hackathon where participants will tackle real-world problems, innovate solutions, and collaborate with industry experts.',
    participants: '20 Active Participants',
    imageUrl: 'https://github.com/SelAshyn/ALCC/blob/baa47b206e7b759a03bfc962a88da26d1c07cef4/IMG_0652.HEIC?raw=true',
  },
  {
    date: 'Sat, July 6, 2024',
    title: 'Editorial Board Revamp',
    description: 'The editorial board is back with fresh content! From AI/ML roadmaps, AWS Bootcamp highlights, and open-source insights to knowledge sharing...',
    participants: '',
    imageUrl: 'https://computerclubkec.github.io/assets/images/events/editorial-board-revamp-2024/thumbnail.jpg',
  },
  {
    date: 'Thu, Jun 27 – Sat, Jun 29, 2024',
    title: 'AWS Bootcamp and Gen AI CAMP',
    description: 'In collaboration with KEC Electronics Club and AWS Cloud Club - TU Nepal, we explored AWS fundamentals and Generative AI applications.',
    participants: '100+ Active Participants',
    imageUrl: 'https://computerclubkec.github.io/assets/images/events/aws-bootcamp-genai-camp-2024/thumbnail.jpg',
  },
];

const RecentActivities: React.FC = () => {
    
  useEffect(() => {
    AOS.init({ duration: 1900 });
  }, []);

  return (
    <section style={{ textAlign: 'justify', paddingTop: '5%', marginBottom: '8%' }}>
      <h2 style={{ textAlign: 'center', fontSize: '4rem', fontWeight: 700, color: '#0f172a' }} data-aos="fade-up">Recent Activities</h2>
      <div className="activities-grid">
        {activities.map((activity, index) => (
          <ActivityCard key={index} {...activity} />
        ))}
      </div>
      <center>
        <button data-aos="fade-up" className="see-more-btn">See More</button>
      </center>
    </section>
  );
};

export default RecentActivities;

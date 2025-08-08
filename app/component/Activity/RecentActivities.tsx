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
    description: 'Welcome to SandBox, an electrifying event hosted by St. Xaviers College (SXC) — a space where students experiment freely, think boldly, and build creatively. ',
    participants: '5 Participants',
    imageUrl: 'https://raw.githubusercontent.com/SelAshyn/ALCC/refs/heads/main/public/Copy%20of%20DSC_0341.jpg',
  },
  {
    date: 'Sun, Feb 02, 2025',
    title: 'LINUX Workshop by GNOME Nepal',
    description: 'Join us for an immersive LINUX Workshop hosted by GNOME Nepal, designed for beginners, enthusiasts, and aspiring developers who want to explore the world of open-source operating systems and the GNOME desktop environment.',
    participants: '20 Active Participants',
    imageUrl: 'https://raw.githubusercontent.com/SelAshyn/ALCC/refs/heads/main/public/IMG_0652.jpg',
  },
  {
    date: 'Sat, July 6, 2024',
    title: 'Inter College Hackathon, Trinity College',
    description: 'The Inter College Hackathon at Trinity College brought together students from various institutions to collaborate on innovative projects, share knowledge, and compete in a friendly environment.',
    participants: '10 Participants',
    imageUrl: 'https://raw.githubusercontent.com/SelAshyn/ALCC/refs/heads/main/public/hackathon2.jpg',
  },
  {
    date: 'Thu, Nov 07 – Sun, Nov 10, 2024',
    title: 'GIT & GITHUB Online Workshop, 2023',
    description: 'The GIT & GITHUB Online Workshop 2023 was a beginner-friendly session that introduced participants to version control using Git and GitHub. It covered essential commands, collaboration workflows, and best practices to help students manage and contribute to coding projects effectively. The workshop covered key concepts such as repositories, changes, branching, merging, and contributing to open-source projects.',
    participants: '10+ Active Participants',
    imageUrl: 'https://raw.githubusercontent.com/SelAshyn/ALCC/refs/heads/main/public/Github%20(2).jpg',
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

'use client'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useRef } from "react";
import React from 'react';
import './comp1.css';

export default function Hero() {
  const div1Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    AOS.init({ duration: 1900 });

    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (!div1Ref.current) return;
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        div1Ref.current.setAttribute('data-aos', 'fade-up');
      } else {
        // Scrolling up
        div1Ref.current.setAttribute('data-aos', 'fade-down');
      }
      lastScrollY = window.scrollY;
      // Refresh AOS to apply the new animation
      AOS.refresh();
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="main">
      <div className="parent">
        <div className="div1" data-aos="fade-up">
          <span>
            <h3>St. Xavier&apos;s</h3> <br /> <h1>A Level&apos;s <br /> Computer Club</h1>
          </span>
          <div className="f"></div>
        </div>
        <div className="div2">
          <div className="g"  data-aos="fade-up"></div>
          <h1  data-aos="fade-up">
            SXC A Level&apos;s Computer Club is a vibrant student-led initiative dedicated to exploring the world of technology and innovation. It serves as a platform for A Level students to collaborate, learn, and create, whether they&apos;re diving into programming, robotics, AI, cybersecurity, or web development. The club encourages hands-on learning through workshops, tech talks, and real-world projects, helping members build both technical skills and confidence. Open to all levels of experience, the club fosters a supportive community where curiosity, creativity, and collaboration thrive.
          </h1>
        </div>
      </div>
    </div>
  );
}
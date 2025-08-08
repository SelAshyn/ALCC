'use client'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
import React from 'react';
import './Header.css';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1900 });
  }, []);

  return (
    <header className="navbar" data-aos="fade-down-right" data-aos-once="true">
      <div className="navbar-left">
        <img src="https://wms.edigitalnepal.com/wms/files/ws-profile/1746599021908_0553cb68-a1c2-4cb6-847c-ae1c76fe3848.png" alt="Left Logo" className="logo-small" />
        <div className="divider" />
        <img src="https://raw.githubusercontent.com/SelAshyn/ALCC/refs/heads/main/public/LogoWithoutBG.png" alt="Right Logo" className="logo-large" />
        <div className="club-name">
          SXC A Level&apos;s<br />
          Computer Club
        </div>
      </div>

      {/* Hamburger menu for mobile */}
      <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        ☰
      </button>

      {/* Nav Links */}
      <nav className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
        <a href="#home" className="nav-item_h">Home</a>
        <a href="#about" className="nav-item">About Us</a>
        <a href="#projects" className="nav-item">Projects</a>
        <a href="#events" className="nav-item">Events</a>
        <a href="#team" className="nav-item">Our Team</a>
        <a href="#team" className="nav-item">Blogs</a>
  
      </nav>

      {/* Login button */}
      <div className="navbar-right">
        <button className="login-button">Log In</button>
      </div>
    </header>
  );
}
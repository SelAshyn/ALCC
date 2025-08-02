'use client'

import React from 'react';
import './Footer.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1900 });
  }, []);

  return (
    <footer className="footer" data-aos="fade-up">
      <div className="footer-main">
        <div className="footer-left">
          <h2>St Xavier&apos;s A Level&apos;s Computer Club</h2>
          <p>📍 St. Xavier's College Loyola Campus, Thapathali, Kathmandu - 11, Nepal</p>
          <p>📞 +977 9864334657, +977 XXXXXXXXXX</p>
          <p>✉️ alcc@sxc.edu.np</p>
          <div className="footer-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-tiktok"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-discord"></i>
            <i className="fab fa-github"></i>
          </div>
        </div>

        <div className="footer-right">
          <h3>Subscribe to our Newsletter</h3>
          <div className="newsletter-form">
            <input type="email" placeholder="example@gmail.com" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 <strong>St Xavier&apos;s A Level&apos;s Computer Club</strong> | All Rights Reserved</p>
        <p>Designed & Developed by <strong>Code_Guide</strong></p>
      </div>
    </footer>
  );
};

export default Footer;

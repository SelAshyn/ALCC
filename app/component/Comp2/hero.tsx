'use client'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useRef } from "react";
import React from 'react';
import './comp2.css';
import { CountUp } from 'countup.js';

export default function Hero() {
  const counterRef = useRef<HTMLHeadingElement>(null);
  const counter2Ref = useRef<HTMLHeadingElement>(null);
  const counter3Ref = useRef<HTMLHeadingElement>(null);
  const counter4Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    AOS.init({ duration: 1900 });

    const animateCounters = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (counterRef.current) {
            const countUp1 = new CountUp(counterRef.current, 500, {
              duration: 2, useEasing: true, useGrouping: true, separator: ',', suffix: '+'
            });
            if (!countUp1.error) countUp1.start();
          }
          if (counter2Ref.current) {
            const countUp2 = new CountUp(counter2Ref.current, 50, {
              duration: 2, useEasing: true, useGrouping: true, separator: ',', suffix: '+'
            });
            if (!countUp2.error) countUp2.start();
          }
          if (counter3Ref.current) {
            const countUp3 = new CountUp(counter3Ref.current, 10, {
              duration: 2, useEasing: true, useGrouping: true, separator: ',', suffix: '+'
            });
            if (!countUp3.error) countUp3.start();
          }
          if (counter4Ref.current) {
            const countUp4 = new CountUp(counter4Ref.current, 100, {
              duration: 2, useEasing: true, useGrouping: true, separator: ',', suffix: '+'
            });
            if (!countUp4.error) countUp4.start();
          }
        }
      });
    };

    const observer = new IntersectionObserver(animateCounters, { threshold: 0.5 });

    [counterRef, counter2Ref, counter3Ref, counter4Ref].forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="main1 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col-reverse lg:flex-row gap-8">
        <div className="content w-full flex flex-wrap justify-center sm:justify-between items-center" data-aos="fade-up">
          <div className="evor w-1/2 sm:w-1/4 text-center mb-4" data-aos="fade-up">
            <h1 ref={counter2Ref}></h1>
            <h3>Events Organized</h3>
          </div>
          <div className="evor2 w-1/2 sm:w-1/4 text-center mb-4" data-aos="fade-up">
            <h1 ref={counterRef}></h1>
            <h3>Students Impacted</h3>
          </div>
          <div className="evor3 w-1/2 sm:w-1/4 text-center mb-4" data-aos="fade-up">
            <h1 ref={counter3Ref}></h1>
            <h3>Industry Collaborated</h3>
          </div>
          <div className="evor4 w-1/2 sm:w-1/4 text-center mb-4" data-aos="fade-up">
            <h1 ref={counter4Ref}></h1>
            <h3>Members & Alumni</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

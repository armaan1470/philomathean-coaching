import React, { useState, useEffect, useRef } from "react";
import "./Counter.css";

function Counter() {
  const [maxValue, setMaxValue] = useState(1000);
  const [progress, setProgress] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          const duration = 5000; // total duration in milliseconds
          const interval = setInterval(() => {
            setProgress((prev) => prev + 50);
          }, 15);
          setTimeout(() => clearInterval(interval), duration);
        }
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  /* Logic to switch between Desktop and Mobile View */
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const lectures = Math.min(Math.round((progress / 5000) * maxValue), maxValue);
  const tutors = Math.min(Math.round((progress / 5000) * 25), 25);
  const batches = Math.min(Math.round((progress / 5000) * 96), 96);
  const students = Math.min(Math.round((progress / 5000) * 200), 200);

  if (isMobile) {
    return (
      <div className="counter-div-mobile" ref={counterRef}>
        <div className="mobile-counter-item">
          <p className="mobile-count">{lectures}+</p>
          <p className="mobile-label">Lecture Conducted</p>
        </div>
        <div className="mobile-counter-item">
          <p className="mobile-count">{tutors}+</p>
          <p className="mobile-label">Expert Tutors</p>
        </div>
        <div className="mobile-counter-item">
          <p className="mobile-count">{batches}+</p>
          <p className="mobile-label">Batches</p>
        </div>
        <div className="mobile-counter-item">
          <p className="mobile-count">{students}+</p>
          <p className="mobile-label">Emerging Students</p>
        </div>
      </div>
    );
  }

  return (
    <div className="counter-div" ref={counterRef}>
      <div className="n1 lp1">
        <p>{lectures}</p>
        <p>Lecture Conducted</p>
      </div>
      <div className="n1 lp2">
        <p>{tutors}</p>
        <p>Expert Tutors</p>
      </div>
      <div className="n1 lp3">
        <p>{batches}</p>
        <p>Batches</p>
      </div>
      <div className="n1 lp4">
        <p>{students}</p>
        <p>Emerging Students</p>
      </div>
    </div>
  );
}

export default Counter;

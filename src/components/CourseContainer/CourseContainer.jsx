import React from "react";
import { useState, useEffect } from "react";
import "./CourseContainer.css";
import course1 from "../../assets/images/orange.png";
import course2 from "../../assets/images/green.png";
import course3 from "../../assets/images/voilet.png";
import course4 from "../../assets/images/pink.png";
import course5 from "../../assets/images/blue.png";
import course6 from "../../assets/images/yellow.png";
import { Link } from "react-router-dom";

function CourseContainer() {
  const [visibleIndex, setVisibleIndex] = useState(-1);

  // for course animation
  const checkVisibility = () => {
    const elements = document.querySelectorAll(".courses_home img");
    let index = -1;
    for (let i = 0; i < elements.length; i++) {
      const rect = elements[i].getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        index = i;
      }
    }
    setVisibleIndex(index);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkVisibility);
    return () => {
      window.removeEventListener("scroll", checkVisibility);
    };
  }, []);

  return (
    <div className="course_container">
      <p>Courses at Philomathean</p>
      <div className={`courses_home ${visibleIndex !== -1 ? "visible" : ""}`}>
        <Link to="/about-ig">
          <img
            src={course1}
            alt=""
            style={{ animationDelay: "0.2s" }}
            loading="lazy"
          />
        </Link>
        <Link to="/ASlevel">
          <img
            src={course2}
            alt=""
            style={{ animationDelay: "0.4s" }}
            loading="lazy"
          />
        </Link>
        <Link to="/intro-ib">
          <img
            src={course3}
            alt=""
            style={{ animationDelay: "0.6s" }}
            loading="lazy"
          />
        </Link>
        {/* <Link to="/courses"><img src={course4} alt="" style={{ animationDelay: '0.8s' }} loading='lazy'/></Link>
      <Link to="/courses"><img src={course5} alt="" style={{ animationDelay: '1s' }} loading='lazy'/></Link>
      <Link to="/courses"><img src={course6} alt="" style={{ animationDelay: '1.2s' }} loading='lazy'/></Link> */}
      </div>
    </div>
  );
}

export default CourseContainer;

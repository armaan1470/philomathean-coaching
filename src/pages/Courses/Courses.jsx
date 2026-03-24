import React, { useEffect } from "react";
import "./Courses.css";
import logo from "../../assets/images/Courses logo.png";
import bgdesign1 from "../../assets/images/bg design.png";
import bgdesign from "../../assets/images/bg design 1.png";

function Courses() {
  useEffect(() => {
    const observer = new IntersectionObserver((enteries) => {
      enteries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains("cd_even")) {
            entry.target.classList.add("animate_3");
          } else {
            entry.target.classList.add("animate_2");
          }
        } else {
          entry.target.classList.remove("animate_3");
          entry.target.classList.remove("animate_2");
        }
      });
    });
    const element = document.querySelectorAll(".courses_card");
    element.forEach((element, index) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="banner b12">
        <div className="banner_content_area">
          <div className="banner_text_content_area">
            <div className="banner_heading">Our Courses</div>
          </div>
          <div className="banner_img_content_area">
            <img src={logo} alt={logo} className="banner_img_content" />
          </div>
        </div>
      </div>
      <div className="courses_section">
        <div className="courses_container">
          {[
            {
              id: 1,
              title: "IGCSE",
              content: [
                "Wherever in the world your students want to go, Cambridge IGCSE is a great choice for it. Not only is it truly international - it gives students more options than any other international qualification. That means more subjects to choose from, more ways to learn and more ways to succeed.",
                "Our IGCSE courses are designed and delivered by Cambridge teachers and examiners who have been teaching the subject for many years. Their inside knowledge helps the students explore the subjects with great fun and practical approach. Students are supported with regular tests and assignments as per Cambridge pattern.",
                "The revision sessions further strengthen the weak points recognised in the testing. With a cumulative effort via back and forth between testing and revision the students are prepared to ace the exams and it also helps lay a strong foundation for IBDP or A Levels."
              ]
            },
            {
              id: 2,
              title: "IBDP",
              content: [
                "International Baccalaureate Diploma Programme curriculum is made up of six subject groups and the DP core, comprising theory of knowledge (TOK), creativity, activity, service (CAS) and the extended essay.",
                "Through the Diploma Programme (DP) core, students reflect on the nature of knowledge, complete independent research and undertake a project all of which aims to make them global citizens. In line with the core values of IB, our IB courses are designed and delivered by IB teachers and examiners.",
                "Students are further tested rigorously and given weekly assignments. Along with the subjects, our tutors also help students for IA (Internal Assessment) projects with their insider insights on the grading of IAs from their school experience."
              ]
            },
            {
              id: 3,
              title: "AS & A Level",
              content: [
                "Cambridge International Advanced Subsidiary Levels (AS Levels) and Cambridge International Advanced Levels (A Levels) are subject-based qualifications usually taken in the final two years of high school. Cambridge International AS Level is typically a one-year programme of study, while Cambridge International A Level typically takes two years.",
                "Our AS & A level courses are designed by School teachers and past examiners that develop students’ knowledge, understanding and skills through: in-depth subject content, learning to work independently, applying knowledge and understanding to new as well as familiar situations, handling and evaluating different types of information sources, thinking logically and presenting ordered and coherent arguments and explanations. Our A and AS Level courses are further aided by regular practice problems and rigorous testing."
              ]
            },
            {
              id: 4,
              title: "IIT-JEE",
              content: [
                "JEE or Join Entrance Examination is Indian Engineering Entrance Exam necessary to get admission into national engineering universities & institutes. JEE preparation demands in depth knowledge of the concepts as it is globally recognised as one of the most challenging entrance exam.",
                "Our JEE courses are designed & delivered by IIT Bombay alumni with more than 8 years of teaching experience. Our JEE courses enable the students to do smart, systematic & concentrated effort aided by our daily practice problems, regular test, rigorous doubts solving & revisions. Our students have secured seats in prestigious IIT Bombay, IIT Delhi, IIT Madras and more."
              ]
            },
            {
              id: 5,
              title: "NEET (UG)",
              content: [
                "NEET for the National Eligibility cum Entrance Test is an Indian Medical Entrance Examination. Our NEET Curriculum for physics & chemistry is designed by IIT Bombay alumni & Biology is designed by MBBS doctors. NEET-UG preparation requires dedication, perseverance, smart work & systematic planning.",
                "Our tutors help students inculcate these qualities as well as our NEET Curriculum helps students ace the subjects of Physics, Chemistry, Botany, Zoology with thorough coverage of the syllabus and rigorous testing & revision. Our students have a secured seats in MBBS programmes offered by prestigious colleges like Armed Forces Military College etc."
              ]
            }
          ].map((course, index) => (
            <div
              key={course.id}
              className={`courses_card ${index % 2 !== 0 ? "cd_even" : ""}`}
            >
              <div className={`courses_card_header course_head${course.id}`}>
                <div className="header_bg_image left">
                  <img src={bgdesign} alt="" />
                </div>
                <div className="card_heading_text">{course.title}</div>
                <div className="header_bg_image right">
                  <img src={bgdesign1} alt="" />
                </div>
              </div>
              <div className={`courses_card_content course_border${course.id}`}>
                {course.content.map((para, pIndex) => (
                  <p key={pIndex} className="card_para">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Courses;

import React from "react";
import ilust1 from "../../assets/asalevelscontent/1.png";
import ilust2 from "../../assets/asalevelscontent/2.png";
import logo from "../../assets/IGCSE Content/Subjects Offered at IGCSE/5.png";
import ButtonModal from "../../components/ButtonModal/ButtonModal";
import "./Aslevel.css";

const Aslevel = () => {
  return (
    <div className="main_container">
      <div className="banner">
        <div className="banner_content_area">
          <div className="banner_text_content_area">
            <div className="banner_heading">AS & A Levels Tuition</div>
            <div className="banner_text">
              World Class and Certified IGCSE Tutors at Your Fingertips. <br />{" "}
              Get Individualized, Focused Tuition Classes and Ace your
              Assessment.
            </div>
          </div>
          <div className="banner_img_content_area">
            <img src={logo} alt={logo} className="banner_img_content" />
          </div>
        </div>
      </div>

      <div className="intro_igsce1">
        <div className="igsce_ilust_container">
          <img src={ilust1} alt="ilustration" />
        </div>
        <div className="igsce_content1">
          <div className="content_header">
            <p>AS & A LEVELS TUITION</p>
            <h1>Exam Preparation for AS & A Levels</h1>
          </div>
          <div className="content-detail">
            <p className="mr-b">
              Our Online exam preparation & regular classes help the AS & A
              level students to score high grades and gain more knowledge. Most
              of our students rigorously practice :
            </p>
            <ul className="subject-list">
              <li className="list-header2">
                Practice with past examination papers, corrected samples, and
                exam-style questions banks.
              </li>
              <li className="list-header2">
                Get useful strategies and shortcuts to manage the subject matter
                that improves their writing time.
              </li>
              <li className="list-header2">
                Get feedback and immediate doubt clarification from an assigned
                Expert.
              </li>
            </ul>
            <p className="mr-t">
              Every program offered at Philomathean Career Institute is designed
              to nurture students from the onset and prepare them methodically
              to achieve their academic goals. We offer Online Comprehensive
              IGCSE Tuition Classes in the following subjects.
            </p>
            <ul className="list-container mr-t">
              <li className="list-header flex-list">Mathematics</li>
              <li className="list-header flex-list">English</li>
              <li className="list-header flex-list">Chemistry</li>
              <li className="list-header flex-list">Physics</li>
              <li className="list-header flex-list">Biology</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="intro_igsce2">
        <div className="igsce_content2">
          <div className="content-detail modified3">
            <div className="content_header2">
              <h1>Learning Environment at Philomathean</h1>
            </div>
            <p>
              At Philomathean Career Institute, subject experts focus on unique
              skill set and conceptual knowledge and help learner to transfer
              it.
            </p>
            <ul className="subject-list mr-t">
              <li className="list-header">At Philomathean We Provide</li>
              <ul className="list-inner">
                <li>Individualized Attention</li>
                <li>Value-driven Classes</li>
                <li>Result-oriented Sessions</li>
                <li>Convenience for Students</li>
                <li>Cost-Effective</li>
              </ul>
            </ul>

            <ul className="subject-list mr-t">
              <li className="list-header">Our Key Features</li>
              <ul className="list-inner">
                <li>Flexible Timings</li>
                <li>Unique Teaching Methodology</li>
                <li>Experienced Subject Experts</li>
                <li>Highly Qualified Faculty</li>
                <li>Recent Resources</li>
              </ul>
            </ul>
          </div>
        </div>

        <div className="igsce_ilust_container  ">
          <img src={ilust2} alt="ilustration" />
        </div>
      </div>
      <div className="book_in_wrapper">
        <div className="book_in_container">
          <div className="book_in_detail">
            <small>Free Demo Lecture</small>
            <h1>
              Ready to dive in?
              <br />
              Attain your Free Demo Lecture today.
            </h1>
          </div>
          <ButtonModal name="BOOK NOW" bg="white" clr="orange" bld="600" />
        </div>
      </div>
    </div>
  );
};

export default Aslevel;

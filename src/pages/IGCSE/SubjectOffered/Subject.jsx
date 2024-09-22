import React from "react";
import logo from "../../../assets/IGCSE Content/Subjects Offered at IGCSE/5.png";
import ilust1 from "../../../assets/IGCSE Content/Subjects Offered at IGCSE/1.png";
import ilust2 from "../../../assets/IGCSE Content/Subjects Offered at IGCSE/2.png";
import "./Subject.css";
import ButtonModal from "../../../components/ButtonModal/ButtonModal";
import art1 from "../../../assets/IGCSE Content/Subjects Offered at IGCSE/6.png";
import art2 from "../../../assets/IGCSE Content/Subjects Offered at IGCSE/3.png";

const Subject = () => {
  return (
    <div className="main_container">
      <img src={art1} alt="art" className="art1" />
      <img src={art2} alt="art" className="art2" />
      <div className="banner b1">
        <div className="banner_content_area">
          <div className="banner_text_content_area">
            <div className="banner_heading">
              Subjects Offered
              <br /> in IGCSE
            </div>
          </div>
          <div className="banner_img_content_area">
            <img src={logo} alt="logo" className="banner_img_content" />
          </div>
        </div>
      </div>

      <div className="intro_igsce1">
        <div className="igsce_ilust_container">
          <img src={ilust1} alt="ilustration" />
        </div>
        <div className="igsce_content1">
          <div className="content_header">
            <p>IGCSE TUITION</p>
            <h1>Subject Offered at Philomathean for IGSCE</h1>
          </div>
          <div className="content-detail">
            <p className="mr-b">
              Every program offered at Philomathean Career Insititute is
              painstakingly designed to nurture students from the onset and
              prepare them methodically to achieve their academic goals. We
              offer Online Comprehensive IGCSE Tuition Classes in the following
              subjects.
            </p>
            <ul className="subject-list">
              <li className="list-header">English</li>
              <ul className="list-inner">
                <li>First langauge - 500</li>
                <li>First langauge (9-1) - 0990</li>
                <li>First langauge (US) - 0524</li>
                <li>Literature (US) - 0427</li>
                <li>Literature in English - 0475</li>
                <li>Literature in English (9-1) - 0992</li>
                <li>English (as an Additional langauge) - 0472 </li>
                <li>English (as an Additional langauge) (9-1) - 0772 </li>
              </ul>
            </ul>
          </div>
        </div>
      </div>

      <div className="intro_igsce2">
        <div className="igsce_content2">
          <div className="content-detail modified3">
            <div className="list-container">
              <ul className="flex-list">
                <li className="list-header">Biology</li>
                <ul className="list-inner">
                  <li>Biology - 0610 </li>
                  <li>Biology (9-1) – 0970</li>
                </ul>
              </ul>
              <ul className="flex-list">
                <li className="list-header">Chemistry</li>
                <ul className="list-inner">
                  <li>Chemistry – 0620</li>
                  <li>Chemistry (9-1) – 0971</li>
                </ul>
              </ul>
              <ul className="flex-list">
                <li className="list-header">Physics</li>
                <ul className="list-inner">
                  <li>Physics - 0625</li>
                  <li>Physics (9-1) – 0972</li>
                </ul>
              </ul>
              <ul className="flex-list fl-span">
                <li className="list-header">Mathematics</li>
                <ul className="list-inner">
                  <li>Mathematics - 0580</li>
                  <li>Mathematics - Additional - 0606</li>
                  <li>Mathematics - International - 0607</li>
                  <li>Mathematics (9-1) - 0980</li>
                  <li>Mathematics(US) – 0444</li>
                </ul>
              </ul>
            </div>
            <p>
              We provide a wide range of teaching support and resource materials
              for above mentioned Cambridge IGCSE subject. Our IGCSE subject
              experts focus on unique skill set and conceptual knowledge and
              help learner to transfer it.
            </p>
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

export default Subject;

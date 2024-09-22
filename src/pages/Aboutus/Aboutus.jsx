import React, { useEffect } from "react";
import "./Aboutus.css";
import illustration4 from "../../assets/images/Illustration-4.png";
import director from "../../assets/images/director image.jpg";
import tut1 from "../../assets/images/Team-1.jpg";
import tut3 from "../../assets/images/Team-3.jpg";

import mission from "../../assets/images/Our Mission.png";
import vision from "../../assets/images/Our Vision.png";
import mission_div from "../../assets/images/mission.png";
import vision_div from "../../assets/images/vision.png";

import logo from "../../assets/images/About US logo.png";

import ButtonModal from "../../components/ButtonModal/ButtonModal";

function Aboutus() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".t");
      elements.forEach((element) => {
        const { top, bottom } = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (top < windowHeight * 1) {
          if (element.classList.contains("ani1")) {
            element.classList.add("animate_2");
          } else if (element.classList.contains("ani2")) {
            element.classList.add("animate_3");
          } else if (element.classList.contains("director")) {
            element.classList.add("fadein");
          } else if (element.classList.contains("avatar_img")) {
            element.style.animation = "popup forwards 0.5s";
            const storiesImages = document.querySelectorAll(".stories_img");
            storiesImages.forEach((img) => {
              img.style.animation = "popup forwards 0.5s";
              img.style.animationDelay = "0.5s";
            });
          } else if (
            element.classList.contains("primary_text") ||
            element.classList.contains("secondary_text")
          ) {
            element.classList.add("typed");
          } else if (element.classList.contains("team_cards_container")) {
            const TeamsImages = document.querySelectorAll(".team_cards");
            // console.log(TeamsImages)
            TeamsImages.forEach((img, index) => {
              img.style.animation = "hoverable forwards 0.5s";
              img.style.animationDelay = `${1 + index}s`;
              console.log("first");
            });
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="banner b13">
        <div className="banner_content_area">
          <div className="banner_text_content_area">
            <div className="banner_heading">About Us</div>
          </div>
          <div className="banner_img_content_area">
            <img src={logo} alt={logo} className="banner_img_content" />
          </div>
        </div>
      </div>
      <div className="about_us">
        <div className="about_us_hero">
          <div className="hero_img">
            <img
              src={illustration4}
              alt="illustration4"
              className="illustration4"
            />
          </div>
          <div className="hero_text">
            <div className="hero_text_heading">
              <span>About</span> <span>Us</span>
            </div>

            <p className="hero_subtext">
              Established in 2016, Philomathean Career Institute started with a
              handful of students, in short time period, the institute scaled
              new heights of success by providing coaching for IB & IGCSE
              students MYP, AS & A Level, for Schools and Higher Education
              Goals.
            </p>

            <p className="hero_subtext">
              New milestones were set each year and the institute achieved a
              remarkable landmark with excellent results. Besides IB & IGCSE ,
              MYP , AS & A Levels students 5th to 10th, philomathean career
              institute brought outstanding results in the International
              Olympiads and Foundation Courses as well.
            </p>

            <p className="hero_subtext">
              The institute also started providing preparation courses for Study
              Abroad. Every year, our students get admission into top
              international universities. The institute has now become the
              preferred choice for students, who want to build a strong
              foundation for their higher studies in Academic Goals, or achieve
              top ranks in competitive exams or Study Abroad programs.
            </p>
          </div>
        </div>
        <div className="two_items_container">
          <img src={vision_div} alt={vision} className="t ani1" />
          <img src={mission_div} alt={mission} className="t ani2" />
        </div>
        <div className="about_dir_container">
          <div className="about_dir">
            <img src={director} alt={director} className="t director" />

            <div className="dir_text">
              <div className="dir_heading">About Director</div>
              <p className="dir_subtext">
                Mr. Satish Vishwakarma, an educationist with an entrepreneurial
                vision to build a harmonious society and one who is empowered by
                ‘Quality Education’ is a physics & maths alumnus, armed with 1
                decade of experience and proficiency.{" "}
              </p>
              <p className="dir_subtext">
                He is an expert in the field of mathematics and in preparing
                students for various competitive exams. His experience coupled
                with the impactful results of the institute makes him a
                preferred choice among IB & IGCSE students, IBDP , AS&A Level{" "}
              </p>
              <p className="dir_subtext">
                Mr. Satish in recognition of his contribution to the education
                industry. His strategies, planning, and execution help him
                handle the expansion and management of the institute’s business
                acumen topped with financial expertise and professional network,
                bringing glory to the success of the institute.{" "}
              </p>
              <p className="dir_subtext">
                His innovation in the education industry has transformed the
                fundamentals innovatively and efficiently in teaching. The
                incredible contribution he has made in running business
                operations has made him a renowned business leader.
              </p>
            </div>
          </div>
        </div>

        <div className="team_container">
          <div className="team_heading">
            <p>
              Our Philomathean <span> Team </span>
            </p>
          </div>
          <div className="team_cards_container t">
            <img src={tut1} alt={tut1} className="team_cards" />
            {/* <img src={tut2} alt={tut2} className="team_cards" /> */}
            <img src={tut3} alt={tut3} className="team_cards" />
            {/* <img src={tut4} alt={tut4} className="team_cards" />
            <img src={tut5} alt={tut5} className="team_cards" /> */}
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
    </>
  );
}

export default Aboutus;

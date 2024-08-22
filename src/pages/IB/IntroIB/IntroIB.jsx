import React from "react";
import ButtonModal from "../../../components/ButtonModal/ButtonModal";
import logo from "../../../assets/IB/Introdution to IB/4.png";
import ilust1 from "../../../assets/IB/Introdution to IB/2.png";
import ilust2 from "../../../assets/IB/Introdution to IB/3.png";
import ilust3 from "../../../assets/IB/Introdution to IB/1.png";
import art1 from "../../../assets/images/dna.png";
import art2 from "../../../assets/IGCSE Content/Why Choose IGCSE/7.png";
import art3 from "../../../assets/IGCSE Content/Subjects Offered at IGCSE/4.png";
import art4 from "../../../assets/IGCSE Content/Subjects Offered at IGCSE/6.png";
import "./IntroIB.css";
import useAnimation from "../../../Hooks/useAnimation";

const IntroIB = () => {
  useAnimation("animation");

  return (
    <div className="main_container">
      <img src={art1} alt="" className="icon1" />
      <img src={art2} alt="" className="icon2" />
      <img src={art3} alt="" className="icon4" />
      <img src={art4} alt="" className="icon5" />

      <div className="banner b5">
        <div className="banner_content_area">
          <div className="banner_text_content_area">
            <div className="banner_heading">IB Programmes</div>
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
        <div className="igsce_ilust_container animation slide_left">
          <img src={ilust3} alt="ilustration" />
        </div>
        <div className="igsce_content1 animation slide_up">
          <div className="content_header">
            <p>IB TUITION</p>
            <h1>Introduction to IB Programmes</h1>
          </div>
          <div className="content-detail">
            <p>
              The International Baccalaureate is a global organization that
              oversees a variety of educational programs for pupils aged three
              to nineteen. Its programs are taught by carefully trained teachers
              in accredited schools all around the world, and it prides itself
              on giving pupils high-quality education. The IB programs encourage
              variety, international mindedness, curiosity, and a healthy desire
              for learning and excellence, as well as critical thinking and
              problem-solving skills.
              <br />
              <br />
              When you hear about “IB courses” being offered at a school, it
              means that that school has been certified by International
              Baccalaureate Organization (IBO) to offer the IB Primary Years
              Programme, Middle Years Programme, and Diploma Programme classes.
              IB program, similar to the AP program, is an advanced and rigorous
              course. However, you cannot self-study IB courses, hence its
              availability is limited. The expense and training required to get
              certified as an IB school can also contribute to its relative
              rarity at high schools.
            </p>
          </div>
        </div>
      </div>

      <div className="intro_igsce2">
        <div className="igsce_content2 animation slide_left">
          <div className="content-detail ">
            <p>
              In addition, the IB program places a greater emphasis on
              delivering a unified overall curriculum with defined prerequisites
              that leads to a diploma. The IBDP is well-known all around the
              world for the exceptional quality of its coursework. The IB
              curriculum’s strength, as well as the substantial training that IB
              instructors and school leaders are obliged to complete, contribute
              to maintaining the program’s high standard.
              <br />
              <br />
              Because of the IBDP’s high regard, universities will recognize and
              value the effort you put in to achieve your IB Diploma no matter
              where you attend. An IB Diploma is a fantastic approach to
              demonstrate your academic prowess to college admissions officers,
              who will be familiar with the program’s reputation. Of course,
              academic achievement is a significant part of what competitive
              institutions look for in applications. Your GPA, transcript, and
              class rank are often used to demonstrate this in your application.
              Colleges can’t always tell what your grades represent in
              comparison to those of other applicants because every high school
              is different.
            </p>
          </div>
        </div>
        <div className="igsce_ilust_container animation slide_right">
          <img src={ilust1} alt="ilustration" />
        </div>
      </div>

      <div className="intro_igsce1 third">
        <div className="igsce_ilust_container animation slide_up">
          <img src={ilust2} alt="ilustration" />
        </div>
        <div className="igsce_content1">
          <div className="content-detail animation slide_right">
            <p>
              Programs like the IBDP make it easier for institutions to evaluate
              applicants by providing a single, globally accepted curriculum
              that allows admissions personnel to analyze your performance more
              precisely. Because this program is regarded for being challenging,
              completing well in your IB courses, and receiving your IB Diploma
              shows universities that you are an objectively strong student.
              <br />
              <br />
              Earning an IB Diploma also shows you are willing to take on
              special academic challenges. You have chosen to go beyond the
              typical high school curriculum and pursue a goal that asks more of
              you, including substantial independent work on topics of your own
              choosing. This is something that every competitive college values
              <br />
              <br />
              What this means for you is that if you hold an IB Diploma, you
              will be among a limited percentage of college applicants who have
              this credential. This distinction demonstrates that you have not
              just taken on academic challenges, but that you have done so
              through a program that is widely recognized as credible and
              challenging, and that requires graduates to complete a significant
              amount of independent work. This relative uniqueness is a benefit
              because hardly every student can exhibit such a prestigious
              certification when filling out their college applications.
            </p>
          </div>
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

export default IntroIB;

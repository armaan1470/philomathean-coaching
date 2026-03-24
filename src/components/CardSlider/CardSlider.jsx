import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CardSlider.css';
import test1 from "../../assets/images/test-1.png";
import test2 from "../../assets/images/test-2.png";
import test3 from "../../assets/images/test-3.png";
import test4 from "../../assets/images/test-4.png";
import test5 from "../../assets/images/test-5.png";
import test6 from "../../assets/images/test-6.png";
import test7 from "../../assets/images/test-7.png";
import test8 from "../../assets/images/test-8.png";
import test9 from "../../assets/images/test-9.png";
import test10 from "../../assets/images/test-10.png";
import prevbtn from "../../assets/images/slider button 4.png";
import nextbtn from "../../assets/images/slider button 5.png";
// import test1 from "../../assets/images/review-1.png";
// import test2 from "../../assets/images/review-2.png";
// import test3 from "../../assets/images/review-3.png";
// import test4 from "../../assets/images/review-4.png";
// import test5 from "../../assets/images/review-5.png";
// import test6 from "../../assets/images/review-6.png";
// import test7 from "../../assets/images/review-7.png";
// import test8 from "../../assets/images/review-8.png";
// import test9 from "../../assets/images/review-9.png";
// import test10 from "../../assets/images/review-4.png";


const CardSlider = () => {

  // Define your custom previous button component
  const CustomPrevArrow = (props) => (
    <button {...props} className='testPrevBtn'>
      <img src={prevbtn} alt="Previous" />
    </button>
  );

  // Define your custom next button component
  const CustomNextArrow = (props) => (
    <button {...props}  className='testNextBtn'>
      <img src={nextbtn} alt="Next" />
    </button>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "0",
    prevArrow: <CustomPrevArrow />, // Specify your custom previous button component
    nextArrow: <CustomNextArrow />, // Specify your custom next button component
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
        }
      }
    ]
  };



  return (
    <div className="card-slider-container">
      <Slider {...settings}>
        <div className="card">
          <img src={test1} alt=""  className="card-img"/>
        </div>
        <div className="card">
          <img src={test2} alt=""  className="card-img"/>
        </div>
        <div className="card">
          <img src={test3} alt=""  className="card-img"/>
        </div>
        <div className="card">
          <img src={test4} alt=""  className="card-img"/>
        </div>
        <div className="card">
          <img src={test5} alt=""  className="card-img"/>
        </div>
        <div className="card">
          <img src={test6} alt=""  className="card-img"/>
        </div>
        <div className="card">
          <img src={test7} alt=""  className="card-img"/>
        </div>
        <div className="card">
          <img src={test8} alt=""  className="card-img"/>
        </div>
        <div className="card">
          <img src={test9} alt=""  className="card-img"/>
        </div>
        <div className="card">
          <img src={test10} alt=""  className="card-img"/>
        </div>
        {/* Add more cards as needed */}
      </Slider>
    </div>
  );
};

export default CardSlider;

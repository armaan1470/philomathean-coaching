import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import banner1 from "../../assets/images/slider-1.jpg";
import './BannerSlider.css'; // Import a CSS file for custom styles
import Counter from "../../components/Counter/Counter";

const BannerSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <>
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={banner1} alt="Image 1" className="slider-image" loading='lazy'/>
        </div>
        <div>
          <img src={banner1} alt="Image 2" className="slider-image" loading='lazy'/>
        </div>
        {/* Add more slides as needed */}
      </Slider>
      </div>
      <Counter />
    </>
    
  );
};

export default BannerSlider;

import React from 'react'

import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";


import slid1 from '../Image/view_Slide_1.webp';
import slid2 from '../Video/view_slid_videos.webm';
import slid3 from '../Video/view_slid_panoramas.webm';

function ViewSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const LogoSlide = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear"
  };

  return (
    <>
    <Slider {...settings}>
      <div className='main_slider view_slider mt-2'>
        <img className='main_slider_img' src={slid1} alt="" />
      </div>
      <div className='main_slider view_slider'>
        <video className='main_slider_video' src={slid2} autoPlay muted loop></video>
      </div>
      <div className='main_slider view_slider'>
        <video className='main_slider_video' src={slid3} autoPlay muted loop></video>
      </div>
    </Slider>

    {/* <div className="slider-container">
      <Slider {...LogoSlide}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div> */}

    </>
  );
}

export default ViewSlider
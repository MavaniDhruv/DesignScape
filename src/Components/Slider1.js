import React from 'react'

// import Slider from "react-slick";
// import "../../node_modules/slick-carousel/slick/slick.css";
// import "../../node_modules/slick-carousel/slick/slick-theme.css";
 
import slider_first from "../Video/Slider_first.webm";
import slider_img from "../Image/Slider_home_bg.jpg"
import { Image, Row, Col } from 'react-bootstrap';


// For Slider
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

function Slider1() {

    var settings = {
        dots: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <>
            {/* <Slider {...settings}>
                <div className='main_slider'>
                    <video className='main_slider_video' src={slider_first} autoPlay loop muted ></video>
                    <div className="slider1_line1">The All-in-one 3D Design Platform</div>
                </div>
                <div className='main_slider'>
                    <Image className='main_slider_video' src={slider_img} fluid />
                </div>
            </Slider> */}

            <Swiper
                effect={'fade'}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"
            > 
                <SwiperSlide> 
                    <div className='main_slider'>
                        <video className='main_slider_video' src={slider_first} autoPlay loop muted ></video>
                        <div className="slider1_line1">The All-in-one 3D Design Platform</div>
                        <div className="slider1_line2">Build a 3D home in 10 minutes, render a stunning visual in 10 seconds.</div>
                        <div className="slider1_btn1_bg"><button className='slider_btn1'>Start For FREE</button></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='main_slider'>
                        <Image className='main_slider_img' src={slider_img} fluid />
                        <div className="slider2_line1">Coohom Affiliate Partner Program</div>
                        <div className="slider2_line2">Join now to promote the best 3D visualization software and earn $2000+ per month!</div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Slider1;


// import "react-alice-carousel/lib/alice-carousel.css";

// import homepage from "../Pages/homepage.module.css"

// import React from 'react';
// import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';

// const responsive = {
//     0: { items: 1 },
//     568: { items: 2 },
//     1024: { items: 3 },
// };

// const handleDragStart = (e) => e.preventDefault();

// const items = [
//    <img style={{width:'50%'}} src="https://frolicking-arithmetic-6035e6.netlify.app/i2/1.PNG" onDragStart={handleDragStart} role="presentation" alt="1" />,
//    <img style={{width:'50%'}} src="https://frolicking-arithmetic-6035e6.netlify.app/i2/2.PNG" onDragStart={handleDragStart} role="presentation" alt="2"/>,
//    <img style={{width:'50%'}} src="https://frolicking-arithmetic-6035e6.netlify.app/i2/3.PNG" onDragStart={handleDragStart} role="presentation" alt="3"/>,
//    <img style={{width:'50%'}} src="https://frolicking-arithmetic-6035e6.netlify.app/i2/4.PNG" onDragStart={handleDragStart} role="presentation" alt="2"/>,
//    <img style={{width:'50%'}} src="https://frolicking-arithmetic-6035e6.netlify.app/i2/5.PNG" onDragStart={handleDragStart} role="presentation" alt="2"/>,
//    <img style={{width:'50%'}} src="https://frolicking-arithmetic-6035e6.netlify.app/i2/1.PNG" onDragStart={handleDragStart} role="presentation" alt="2"/>,
// ];

// const Carousel31 = () => {

//   return (<>
//     <AliceCarousel
//     responsive={responsive}
//     mouseTracking items={items}
//     disableDotsControls
//     renderPrevButton={() => {
//       return <p className={homepage.carousal1} >Previous Item</p>
//     }}
//     renderNextButton={() => {
//         return <p className="p-4 absolute right-100 top-50%">Next Item</p>
//       }}
// />

//   </>

//   );
// }
// export default
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Heading, Img } from "@chakra-ui/react";
import homepage from "../Pages/homepage.module.css";
import a1 from "../Components/SignIn/images/1.PNG";
import a2 from "../Components/SignIn/images/2.PNG";
import a3 from "../Components/SignIn/images/3.PNG";
import a4 from "../Components/SignIn/images/4.PNG";
import a5 from "../Components/SignIn/images/5.PNG";
import a6 from "../Components/SignIn/images/6.PNG";
import a7 from "../Components/SignIn/images/7.PNG";
import a9 from "../Components/SignIn/images/9.PNG";

const Carousal32 = () => {
  var settings = {
    dots: true,
    arrow: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    gap: "10px",
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{ margin: "40px" }}>
      <Slider {...settings}>
        <div>
          <Img src={a1} />
        </div>
        <div>
          <Img src={a2} />
        </div>
        <div>
          <Img src={a3} />
        </div>
        <div>
          <Img src={a4} />
        </div>
        <div>
          <Img src={a5} />
        </div>
        <div>
          <Img src={a6} />
        </div>
        <div>
          <Img src={a7} />
          <div className={homepage.c_text}>Secrets of Wild India Tour </div>
        </div>
        <div>
          <Img src={a9} />
        </div>
      </Slider>
    </div>
  );
};

export default Carousal32;

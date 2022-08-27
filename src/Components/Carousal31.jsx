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
import homepage from '../Pages/homepage.module.css'

const Carousal31 =()=>{
    var settings = {
        dots: true,
        arrow:true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        gap:"10px",
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    
    return (
      <div style={{margin:"40px"}}>
        
        <Slider {...settings}>
            
          <div>
            <Img className={homepage.img2} 
             src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5f/d6/94/caption.jpg?w=300&h=300&s=1" />
            <div className={homepage.c_text}>Secrets of Wild India Tour </div>
          </div>
          <div>
           <Img className={homepage.img2} 
           src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5d/c6/ea/caption.jpg?w=300&h=300&s=1" />
           <div className={homepage.c_text}>Two Night Tiger Safari Experience at 
            Tadoba National Park &Transfers From Nagpur from $575 per adult
            </div>
          </div>
          <div>
          <Img className={homepage.img2} 
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1e/09/b0/49/caption.jpg?w=300&h=300&s=1" />
          <div className={homepage.c_text}>Safari in Pench National Park </div>
          </div>
          <div>
          <Img className={homepage.img2} 
           src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5c/13/c6/caption.jpg?w=300&h=300&s=1" />
          <div className={homepage.c_text}>Tadoba Tiger Reserve Tour Of India </div>
          </div>
          <div>
          <Img className={homepage.img2} 
           src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/97/f3/2f/caption.jpg?w=300&h=300&s=1" />
          <div className={homepage.c_text}>Wildlife Safari in Bandhavgarh, Kanha, Pench & Tadoba Andhari National Parks </div>
          </div>
          <div>
          <Img className={homepage.img2} 
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/f0/b8/65/caption.jpg?w=300&h=300&s=1" />
          <div className={homepage.c_text}> </div>
          </div>
          <div>
          <Img className={homepage.img2} 
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/15/2d/7e/caption.jpg?w=300&h=300&s=1" />
          <div className={homepage.c_text}>Secrets of Wild India Tour </div>
          </div>
          <div>
          <Img className={homepage.img2} 
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/f4/4a/2d/caption.jpg?w=300&h=300&s=1" />
          <div className={homepage.c_text}>Secrets of Wild India Tour </div>
          </div>
          <div>
          <Img className={homepage.img2} 
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1e/02/e2/26/caption.jpg?w=300&h=300&s=1" />
          <div className={homepage.c_text}>Secrets of Wild India Tour </div>
          </div>
         
         
        </Slider>
        
      </div>
    );
  }


  export default Carousal31;




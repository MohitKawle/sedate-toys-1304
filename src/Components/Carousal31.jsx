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

const Carousal31 =()=>{
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
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
      <div style={{margin:"50px"}}>
        
        <Slider {...settings}>
            
          <div>
            <Img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/8e/b8/c8/caption.jpg?w=300&h=300&s=1" />
            <Heading style={{textAlign:"center"}}>Culture Tour</Heading>
          </div>
          <div>
           <Img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/d2/43/5b/caption.jpg?w=300&h=300&s=1" />
           <Heading style={{textAlign:"center"}}>City Tour</Heading>
          </div>
          <div>
          <Img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/69/a0/9c/dagdusheth-ganpati.jpg?w=300&h=-1&s=1" />
          <Heading style={{textAlign:"center"}}>Secred & Religious Sites</Heading>
          </div>
          <div>
          <Img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/d7/76/cb/caption.jpg?w=300&h=300&s=1" />
          <Heading style={{textAlign:"center"}}>Day Trips </Heading>
          </div>
          <div>
          <Img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/55/06/72/caption.jpg?w=300&h=300&s=1" />
          <Heading style={{textAlign:"center"}}>Half-day Tours</Heading>
          </div>
          <div>
          <Img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/83/33/57/caption.jpg?w=300&h=300&s=1" />
          <Heading style={{textAlign:"center"}}>Shopping Mals</Heading>
          </div>
          <div>
          <Img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/65/8e/2e/caption.jpg?w=300&h=300&s=1" />
          <Heading style={{textAlign:"center"}}>Private Day Trips </Heading>
          </div>
          <div>
          <Img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/c3/36/a1/caption.jpg?w=300&h=300&s=1" />
          <Heading style={{textAlign:"center"}}>Dining Exprement</Heading>
          </div>
          <div>
          <Img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/af/8b/07/dam-view.jpg?w=300&h=300&s=1" />
          <Heading style={{textAlign:"center"}}>Dams</Heading>
          </div>
          <div>
          <Img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/56/72/1b/caption.jpg?w=300&h=300&s=1" />
          <Heading style={{textAlign:"center"}}>Private Sight Seeing Tours</Heading>
          </div>
          <div>
          <Img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/63/60/30/caption.jpg?w=300&h=300&s=1" />
          <Heading style={{textAlign:"center"}}>Top Pics</Heading>
          </div>
          <div>
          <Img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/10/e1/9d/taljai-mata-mandir.jpg?w=300&h=300&s=1" />
          <Heading style={{textAlign:"center"}}>Nature & Wildlife Areas</Heading>
          </div>
         
        </Slider>
      </div>
    );
  }


  export default Carousal31;




import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Img, Text } from "@chakra-ui/react";
import dots from "./images/dots.png";

const Slide = () => {
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
    <div style={{ margin: "50px" }}>
      <Slider {...settings}>
        <div>
          <Img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/56/72/1b/caption.jpg?w=300&h=300&s=1" />
          <Text
            style={{
              textAlign: "center",
              marginLeft: "-15px",
              marginTop: "15px",
              fontWeight: "bold",
            }}
          >
            1-Day Trip to The Taj Mahal and Agra from Pune with Commercial
            Return Flights
          </Text>
          <img src={dots} />
          <p>Full day Tour</p>
          <Text fontWeight="bold">from $380.00 per adult</Text>
        </div>

        <div>
          <Img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/10/e1/9d/taljai-mata-mandir.jpg?w=300&h=300&s=1" />
          <Text
            style={{
              textAlign: "center",
              marginLeft: "-15px",
              marginTop: "15px",
            }}
          >
            1-Day Trip to The Nature and Forest Animals from Pune with
            Commercial Return Transport
          </Text>
          <img src={dots} />
          <p>Full day Tour</p>
          <Text fontWeight="bold">from $380.00 per adult</Text>
        </div>

        <div>
          <Img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/55/06/72/caption.jpg?w=300&h=300&s=1" />
          <Text
            style={{
              textAlign: "center",
              marginLeft: "-15px",
              marginTop: "15px",
            }}
          >
            {" "}
            India's Independence Movement over a day tour in Pune
          </Text>
          <img src={dots} />
          <p>Full day Tour</p>
          <Text fontWeight="bold">from $380.00 per adult</Text>
        </div>
        <div>
          <Img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/83/33/57/caption.jpg?w=300&h=300&s=1" />
          <Text
            style={{
              textAlign: "center",
              marginLeft: "-15px",
              marginTop: "15px",
            }}
          >
            {" "}
            Top Malls over a day tour in Pune
          </Text>
          <img src={dots} />
          <p>Full day Tour</p>
          <Text fontWeight="bold">from $380.00 per adult</Text>
        </div>
        <div>
          <Img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/65/8e/2e/caption.jpg?w=300&h=300&s=1" />
          <Text
            style={{
              textAlign: "center",
              marginLeft: "-15px",
              marginTop: "15px",
            }}
          >
            {" "}
            Top Most Nature Beauty tour in Pune
          </Text>
          <img src={dots} />
          <p>Full day Tour</p>
          <Text fontWeight="bold">from $380.00 per adult</Text>
        </div>
        <div>
          <Img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/c3/36/a1/caption.jpg?w=300&h=300&s=1" />
          <Text
            style={{
              textAlign: "center",
              marginLeft: "-15px",
              marginTop: "15px",
            }}
          >
            {" "}
            Moonshine Meadery Tour, Mead & Honey Tastings
          </Text>
          <img src={dots} />
          <p>Full day Tour</p>
          <Text fontWeight="bold">from $380.00 per adult</Text>
        </div>
        <div>
          <Img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/8e/b8/c8/caption.jpg?w=300&h=300&s=1" />
          <Text
            style={{
              textAlign: "center",
              padding: " 0px 30px",
              marginTop: "15px",
            }}
          >
            {" "}
            Immersive culture tour of Pune by private car with guide and local
            lunch
          </Text>
          <img src={dots} />
          <p>Full day Tour</p>
          <Text fontWeight="bold">from $380.00 per adult</Text>
        </div>
        <div>
          <Img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/d2/43/5b/caption.jpg?w=300&h=300&s=1" />
          <Text
            style={{
              textAlign: "center",
              padding: "0px 30px",
              marginTop: "15px",
            }}
          >
            {" "}
            Best of Pune Private City Tour with Lunch and Transport.
          </Text>
          <img src={dots} />
          <p>Full day Tour</p>
          <Text fontWeight="bold">from $380.00 per adult</Text>
        </div>
        <div>
          <Img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/c4/23/90/caption.jpg?w=300&h=300&s=1" />
          <Text
            style={{
              textAlign: "center",
              padding: "0px 30px",
              marginTop: "15px",
            }}
          >
            {" "}
            Day Trip to Mahabaleshwar-Panchgani (Guided Fullday Sightseeing Tour
            from Pune)
          </Text>
          <img src={dots} />
          <p>Full day Tour</p>
          <Text fontWeight="bold">from $380.00 per adult</Text>
        </div>
        <div>
          <Img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/80/20/35/caption.jpg?w=300&h=300&s=1" />
          <Text
            style={{
              textAlign: "center",
              padding: "0px 30px",
              marginTop: "15px",
            }}
          >
            {" "}
            Pune to Lonavala Monsoon Drive in Private Vehicle
          </Text>
          <img src={dots} />
          <p>Full day Tour</p>
          <Text fontWeight="bold">from $380.00 per adult</Text>
        </div>
      </Slider>
    </div>
  );
};

export default Slide;

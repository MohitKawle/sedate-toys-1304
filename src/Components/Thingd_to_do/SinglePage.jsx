import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  addToCartFailure,
  addToCartRequest,
  addToCartSuccess,
  placesdata,
} from "../../Redux/AppReducer/action";
import styles from "./SinglePage.module.css";
import { IoIosContacts } from "react-icons/io";
import { Heading, Text } from "@chakra-ui/react";
import axios from "axios";

import bnner1 from "./Image/bnner1.jpg";
import bnner2 from "./Image/bnner2.jpg";
import bottom from "./Image/bottom.jpg";
import Navbar from "../Navbar";
import InnerNav from "../InnerNavbar/InnerNav";
import Footer from "../Footer";

const SinglePage = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  const placesData = useSelector((state) => state.AppReducer.places);

  const [currentData, setCurrentData] = useState({});

  useEffect(() => {
    if (placesData?.length === 0) {
      dispatch(placesdata());
    }
  }, [dispatch, placesData.length]);

  useEffect(() => {
    if (id) {
      //filter the album based on the id
      const data = placesData.find((album) => album.id === Number(id));
      data && setCurrentData(data);
    }
  }, [id, placesData]);

  const handleCart = () => {
    
    let payload = placesData.find((item) => item.id === Number(id));
    console.log(payload);

    dispatch(addToCartRequest());
    axios
      .post("https://tripadvisorbackend.onrender.com/basket", payload)
      .then(() => dispatch(addToCartSuccess()))
      .catch((e) => dispatch(addToCartFailure(e)));
    alert("Item added to Basket");
    window.location.reload();
  };

  return (
    <>
      <Navbar />
      <InnerNav />
      <div className={styles.head}>
        <div className={styles.single1}>
          <h1 style={{ fontSize: "30px" }}>{currentData.title}</h1>
          <div>
            <div>
              <h2>{currentData.price}</h2>
            </div>
          </div>
          <div>
            <img
              style={{ width: "800px", height: "600px", marginLeft: "1.5%" }}
              src={currentData.imageUrl}
              alt={currentData.name}
            />
          </div>
        </div>
        <div className={styles.single2}>
          <div className={styles.single2a}>
            <input type="date" />
            <p
              style={{
                display: "flex",
                border: "1px solid grey",
                borderRadius: "10px",
                width: "60px",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <IoIosContacts fontSize="30px" />2
            </p>
          </div>

          <div className={styles.single2b}>
            <p>Booking in advance</p>
            <p style={{ width: "200px" }}>
              from $380.00 per adult (price varies by grouo size)
            </p>
          </div>
          <button className={styles.press} onClick={handleCart}>
            <b>Add To Basket</b>
          </button>

          <Text padding="30px">
            Reserve now & pay later: Save your spot free of charge with flexible
            booking. Learn more
          </Text>
          <p>Add more places to visit</p>
          <Text padding="30px">Free cancellation</Text>
        </div>
      </div>
      <div style={{ marginTop: "50px", padding: "1.5%" }}>
        <Heading>About</Heading>
        <div className={styles.about}>
          <div className={styles.abt1}>
            <h4
              style={{
                textAlign: "left",
                fontSize: "17px",
                fontWeight: "700",
                marginLeft: "15px",
              }}
            >
              Know before you go
            </h4>
            <p style={{ textAlign: "left", marginLeft: "15px" }}>
              Duration: 2h 30m <br /> Mobile tickets accepted <br /> Instant
              confirmation
            </p>
          </div>
          <div className={styles.abt2}>
            <h4
              style={{
                textAlign: "left",
                fontSize: "17px",
                fontWeight: "700",
              }}
            >
              Cancellation policy
            </h4>
            <p>
              For a full refund, cancel at least 24 hours in <br /> advance of
              the start date of the experience.
            </p>
          </div>
          <div className={styles.abt3}>
            <h4
              style={{
                textAlign: "left",
                fontSize: "17px",
                fontWeight: "700",
              }}
            >
              Available languages
            </h4>
            <p style={{ textAlign: "left", marginLeft: "0px" }}>English</p>
          </div>
        </div>
        <div style={{ textAlign: "left", marginLeft: "15px" }}>
          <h3
            style={{
              textAlign: "left",
              fontSize: "17px",
              fontWeight: "700",
            }}
          >
            What to expect{" "}
          </h3>
          <h4>Itinerary </h4>
          <p>This is a typical itinerary for this product</p>

          <p>Stop At: Benaulim, Goa, India</p>
          <p>
            We leave the beautiful Club Mahindra Emerald Palms to ride through
            the peaceful countryside.
          </p>
          <p>
            Riding through the paddy fields, we learn about areca nut/betel nut
            plantation.
          </p>
          <p>
            Glide on to celebrate Goa’s rich Catholic influences in a
            450-year-old church, one of the oldest in Goa.
          </p>
          <p>
            We then ride to Orlim bridge and we learn about fishing activities.
          </p>
          <p>Duration: 3 hours</p>

          <button
            style={{
              borderRadius: "22px",
              height: "50px",
              width: "250px",
              margin: "10px",
              backgroundColor: "white",
              cursor: "pointer",
              border: "1px solid black",
            }}
          >
            <p style={{ fontSize: "18px", padding: "3.5%" }}>
              View more information
            </p>
          </button>

          <h4
            style={{
              textAlign: "left",
              fontSize: "26px",
              fontWeight: "600",
            }}
          >
            Important information
          </h4>

          <b>Inclusions</b>
          <li>
            E-Bike, Trained Captain,Guided Tour,Snacks, Refreshments,Safety
            Gears,Sling Bag & First Aid Support.
          </li>
          <li>Entry/Admission - Benaulim</li>

          <br />
          <br />

          <b>Inclusions</b>
          <br />
          <li>
            Alcoholic beverage, 2-wheeler and LMV Rentals,Tips, Hotel pick up or
            drop off.
          </li>

          <br />
          <br />
          <b>Additional information</b>

          <li>Confirmation will be received at time of booking</li>
          <li>Not wheelchair accessible</li>
          <li>Most travelers can participate</li>
          <li>This tour/activity will have a maximum of 10 travelers</li>

          <button
            style={{
              borderRadius: "22px",
              height: "50px",
              width: "250px",
              border: "1px solid",
              marginTop: "25px",
              backgroundColor: "white",
              cursor: "pointer",
              margin: "10px",
            }}
          >
            <p style={{ fontSize: "18px", padding: "3.5%" }}>View details</p>
          </button>

          <br />
          <br />
          <br />
          <br />

          <img style={{ height: "160px", width: "94%" }} src={bnner2} alt="" />

          <br />
          <br />

          <h4
            style={{
              textAlign: "left",
              fontSize: "26px",
              fontWeight: "600",
            }}
          >
            Travel safe during COVID-19
          </h4>
          <p>Last updated: Dec 2, 2020</p>
          <h4
            style={{
              textAlign: "left",
              fontSize: "18px",
              fontWeight: "600",
              marginTop: "20px",
            }}
          >
            A note from BLive Electric Bike Tours – Countryside Escape to Varca
          </h4>

          <p>
            Welcome to BLive - India’s safest EV tourism brand. The experience
            on our Ebikes follows default social <br /> distancing. Here’s what
            you need to know: Introducing private tours. Safety kits, sanitizers
            and masks <br /> provided. Well sanitized Ebikes and accessories.
            Regular temperature and health checks.
          </p>

          <h4
            style={{
              textAlign: "left",
              fontSize: "18px",
              fontWeight: "600",
              marginTop: "20px",
            }}
          >
            What you can expect during your visit
          </h4>

          <li>Regular temperature checks for staff</li>
          <li>Regularly sanitized high-traffic areas</li>
          <li>Temperature checks for tour participants upon arrival</li>

          <button
            style={{
              borderRadius: "22px",
              height: "50px",
              width: "250px",
              marginTop: "25px",
              backgroundColor: "white",
              cursor: "pointer",
              border: "1px solid",
              margin: "10px",
            }}
          >
            <p style={{ fontSize: "18px" }}>View all safety measures</p>
          </button>
        </div>

        <br />
        <br />
        <img style={{ width: "93%", marginLeft: "40px" }} src={bnner1} alt="" />

        <img
          style={{
            width: "95%",
            marginTop: "60px",
            marginLeft: "40px",
            height: "400px",
          }}
          src={bottom}
          alt=""
        />
      </div>
      <Footer/>
    </>
  );
};

export default SinglePage;

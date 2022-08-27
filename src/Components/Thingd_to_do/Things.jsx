import React, { useEffect } from "react";
import styles from "./Things.module.css";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Slides from "./Slides";
import { Heading, Text } from "@chakra-ui/react";
import Slide from "./Slide";
import { useDispatch, useSelector } from "react-redux";
import { placesdata } from "../../Redux/AppReducer/action";
import TopAttraction from "./Top_Attraction";
import Review from "./Review";
import { Link } from "react-router-dom";
import PlacesCard from "./PlacesCard";
import InnerNav from "../InnerNavbar/InnerNav";

const Things = () => {
  const dispatch = useDispatch();

  const places = useSelector((state) => state.AppReducer.places);

  useEffect(() => {
    dispatch(placesdata());
  }, []);
  console.log(places);
  return (
    <>
      <InnerNav />
      <div style={{ margin: "50px" }}>
        <div className={styles.nav}>
          <p>
            Asia
            <ChevronRightIcon />
            India
            <ChevronRightIcon />
            Maharashtra
            <ChevronRightIcon />
            Pune District
            <ChevronRightIcon />
            Pune
            <ChevronRightIcon />
            Places to visit in Pune
          </p>
          <p>Top Things To Do in Pune, Maharastra</p>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p
            style={{
              fontSize: "42px",
              fontWeight: "700",
              lineHeight: "50px",
              marginTop: "50px",
              color: "black",
            }}
          >
            Places to Visit in Pune
          </p>
          <button
            style={{
              width: "80px",
              marginTop: "50px",
              color: "white",
              padding: "10px",
              borderRadius: "10px",
              background: "black",
            }}
          >
            Map
          </button>
        </div>
        <br />
        <br />
        <div>
          <p style={{ fontSize: "24px", textAlign: "left", fontWeight: "700" }}>
            Popuar Things to do
          </p>
          <br />
        </div>
        <Slides />
        <hr />
        <div>
          <Heading>Ways to tour Pune</Heading>
          <Text> Book these experiences for a close-up look at Pune.</Text>
          <Slide />
          <hr />
        </div>
        <div>
          <Heading>Recommended For You</Heading>
          <Text> Tours and activities tailored to your interests.</Text>
          <div className={styles.place}>
            {places?.length > 0 &&
              places?.map((el) => (
                <Link to={`/places/${el.id}`} key={el.id}>
                  <PlacesCard key={el.id} item={el} />
                </Link>
              ))}
          </div>
        </div>
        <hr />
        {/* Top Attraction */}
        <TopAttraction />
        <br />
        <br />
        <div className={styles.download}>
          <div className={styles.b1}>
            <Heading mt={50}>The both of you could use a trip.</Heading>
            <Text>Plan the holiday you deserve with our app.</Text>
          </div>
          <div className={styles.b2}>
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/43/a7/ce/caption.jpg?w=300&h=-1&s=1"
              alt=""
            />
          </div>
        </div>
        <br />
        <br />
        <Heading margin="auto">Cultural Tours</Heading>
        <Slides />
        <br />
        <hr />
        <br />
        <Heading margin="auto">City Tours</Heading>
        <Slide />
        <hr />
        <br />
        <Review />
      </div>
    </>
  );
};

export default Things;

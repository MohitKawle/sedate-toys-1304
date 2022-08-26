import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRestuarantList } from "../Redux/AppReducer/action";
import styles from "./Restaurants.module.css";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import InnerNav from "./InnerNavbar/InnerNav";

const Restaurants = () => {
  let dispatch = useDispatch();
  const Reslist = useSelector((store) => store.AppReducer.restaurantList);
  const [sort, setSort] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSort(e.target.value);

    if (e.target.value === "lth") {
      Reslist.sort((a, b) => {
        return Number(a.rating) - Number(b.rating);
      });
    } else if (e.target.value === "htl") {
      Reslist.sort((a, b) => {
        return Number(b.rating) - Number(a.rating);
      });
    }
  };

  useEffect(() => {
    dispatch(getRestuarantList);
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <InnerNav />
      <div className={styles.top}>
        <p>Restaurants in Pune</p>
      </div>
      <div className={styles.buttomDiv}>
        <div className={styles.resDiv}>
          <div className={styles.sorting}>
            <label>Sort By: </label>
            <select onChange={handleChange}>
              <option>sort By</option>
              <option value="lth">Rating(Low to High)</option>
              <option value="htl">Rating(High to Low)</option>
            </select>
          </div>
          <div className={styles.resListingDiv}>
            {Reslist.map((rest, ind) => {
              return (
                <div key={rest.id} className={styles.res}>
                  <div className={styles.resPic}>
                    <img
                      src={rest.srcImg}
                      className={styles.imgRes}
                      alt="hotel_photo"
                    />
                  </div>
                  <div className={styles.aboutResDiv}>
                    <div className={styles.ResName}>
                      {ind + 1}.{rest.name}
                    </div>
                    <div className={styles.RatePicDiv}>
                      {rest.ratePic.map((ele) => (
                        <img
                          src={ele.src}
                          key={ele.id}
                          alt="rate-pic"
                          className={styles.ratingPic}
                        />
                      ))}
                    </div>
                    <div className={styles.typeDiv}>
                      <p>{rest.type}</p>
                    </div>
                    <div className={styles.resDetail}>
                      <div className={styles.description}>
                        <p className={styles.review}>"{rest.comment}"</p>
                        <button className={styles.button}>Reserve</button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.faq}>
        <p>Frequently asked Question</p>
        <Accordion allowToggle width="xxl">
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  What are the best restaurants in Pune that deliver?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Some of the most popular restaurants in Pune that deliver are:
              <ul>
                <li> Three Kitchens Restaurant and Bar</li>
                <li> MoMo Cafe - Courtyard Pune Chakan</li>
                <li> Malaka Spice</li>
              </ul>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  What are the best restaurants in Pune that provide takeaway?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Some of the most popular restaurants in Pune that provide takeaway
              are:
              <ul>
                <li>Spice Kitchen</li>
                <li>Alto Vino</li>
                <li>Mosaic</li>
              </ul>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  What are the most popular restaurants in Pune?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              The best restaurants in Pune include:
              <li>Paasha</li>
              <li>Alto Vino</li>
              <li>Ukiyo</li>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  What are the best restaurants in Pune for families with
                  children?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Some of the best restaurants in Pune for families with children
              include:
              <ul>
                <li>The Market</li>
                <li>Feast</li>
                <li>Spice Kitchen</li>
              </ul>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  What are the best restaurants in Pune for cheap eats?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Some of the most popular restaurants in Pune for cheap eats
              include:
              <ul>
                <li>JJ Garden Vada Pav</li>
                <li> Vohuman Cafe</li>
                <li>Marzorin</li>
              </ul>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export { Restaurants };

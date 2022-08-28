import React from "react";
import { useEffect } from "react";
import styles from "./Hotels.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getHotelList, getSightList } from "../Redux/AppReducer/action";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import InnerNav from "./InnerNavbar/InnerNav";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Hotels = () => {
  let dispatch = useDispatch();
  const list = useSelector((store) => store.AppReducer.hotelList);
  const sightList = useSelector((store) => store.AppReducer.sight);

  const [sort, setSort] = React.useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSort(e.target.value);

    if (e.target.value === "lthr") {
      list.sort((a, b) => {
        return Number(a.rating) - Number(b.rating);
      });
    } else if (e.target.value === "htlr") {
      list.sort((a, b) => {
        return Number(b.rating) - Number(a.rating);
      });
    }
    if (e.target.value === "lthp") {
      list.sort((a, b) => {
        return Number(a.price) - Number(b.price);
      });
    } else if (e.target.value === "htlp") {
      list.sort((a, b) => {
        return Number(b.price) - Number(a.price);
      });
    }
  };
  useEffect(() => {
    dispatch(getHotelList);
    dispatch(getSightList);
  }, [dispatch]);

  console.log(sort);

  return (
    <>
      <Navbar />
      <InnerNav />
      <div className={styles.container}>
        <div className={styles.container}>
          <div className={styles.top}>
            <p className={styles.heading}>Pune Hotels and Places to stay</p>
            <p className={styles.subheading}>
              Enter dates to find the best prices
            </p>
            <div className={styles.calenderDiv}>
              <div className={styles.outerDiv1}>
                <div className={styles.innerDiv1}>
                  <input type="date" className={styles.checkIn} />
                </div>
              </div>
              <div className={styles.outerDiv2}>
                <div className={styles.innerDiv2}>
                  <input type="date" className={styles.checkIn} />
                </div>
              </div>
              <div className={styles.outerDiv3}>
                <div className={styles.innerDiv3}>
                  <p>Guest 1room, 2 adults, 0 children</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.buttomDiv}>
            <div className={styles.hotelsDiv}>
              <div className={styles.sorting}>
                <label>Sort By: </label>
                <select onChange={handleChange}>
                  <option>sort By</option>
                  <option value="lthr">Rating(Low to High)</option>
                  <option value="htlr">Rating(High to Low)</option>
                  <option value="lthp">Price(Low to High)</option>
                  <option value="htlp">Price(High to Low)</option>
                </select>
              </div>
              <div className={styles.hotelsListingDiv}>
                {list.map((hotel, ind) => {
                  return (
                    <div key={hotel.id} className={styles.hotel}>
                      <div className={styles.hotelPic}>
                        <img
                          src={hotel.imageSrc}
                          className={styles.imgHotel}
                          alt="hotel_photo"
                        />
                      </div>
                      <div className={styles.aboutHotelDiv}>
                        <div className={styles.hotelName}>
                          {ind + 1}.{hotel.name}
                        </div>
                        <div className={styles.hotelDetail}>
                          <div className={styles.suggestion}>
                            <img
                              src={hotel.best_site}
                              className={styles.site}
                              alt="best-site_logo"
                            />
                            <p>₹{hotel.price}</p>
                            <button className={styles.button}>
                              <a
                                href={hotel.href}
                                target="_blank"
                                rel="noreferrer"
                              >
                                View Deals
                              </a>
                            </button>
                          </div>
                          <div className={styles.bestOptions}></div>
                          <div className={styles.description}>
                            <div className={styles.RatePicDiv}>
                              {hotel.ratePic.map((ele) => (
                                <img
                                  src={ele.src}
                                  key={ele.id}
                                  alt="rate-pic"
                                  className={styles.ratingPic}
                                />
                              ))}
                              <p className={styles.reviews}>{hotel.reviews}</p>
                            </div>
                            <p className={styles.aboutHead}>About</p>
                            <p>{hotel.about}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sights}>
          <p className={styles.sightHead}>Hotels near the sights</p>
          <div className={styles.sightDiv}>
            {sightList.map((sight) => (
              <div key={sight.id} className={styles.sightInd}>
                <img
                  src={sight.srcImg}
                  className={styles.imgSight}
                  alt="sight-pic"
                />
                <p>{sight.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.faq}>
          <p>Frequently asked Question</p>
          <Accordion allowToggle width="xxl">
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Which hotels are closest to Lohegaon Airport?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Treebo Trip Punest Hotel, Treebo Trend Chetan Executive, and OYO
                9196 Suyog Inn are some of the most popular hotels for
                travellers looking to stay near Dagadusheth Halwai Ganapati
                Temple. See the full list: Hotels near Dagadusheth Halwai
                Ganapati Temple.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    What are the best resorts in Pune?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                The Corinthians Resort & Club, Atmantan Wellness Resort, and
                Green Gate Resort are all popular resorts for travellers staying
                in Pune. See the full list: Pune Resorts.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    What are the best hotels near Sinhagad Fort?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Popular hotels close to Sinhagad Fort include Mantra Resort
                Pune, Centurion Spring Hills Holiday Resort, and Ambrosia Resort
                & Spa. See the full list: Hotels near Sinhagad Fort.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    What are the best luxury hotels in Pune?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Popular luxury hotels in Pune include Marriott Suites Pune, The
                Ritz-Carlton Pune, and Conrad Pune. See the full list: Pune
                Luxury Hotels.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    What are the best cheap hotels in Pune?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Popular cheap hotels in Pune include Blue Diamond - IHCL
                SeleQtions, Hotel Shree Panchratna, and Hotel Shreyas. See the
                full list: Cheap Hotels in Pune.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    What are the best hotels near Aga Khan Palace?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                A few of the most popular hotels near Aga Khan Palace are The
                Ritz-Carlton Pune, Blue Diamond - IHCL SeleQtions, and Quality
                Inn Mint. See the full list: Hotels near Aga Khan Palace.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    What are the best hotels near Sinhagad Fort?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Popular hotels close to Sinhagad Fort include Mantra Resort
                Pune, Centurion Spring Hills Holiday Resort, and Ambrosia Resort
                & Spa. See the full list: Hotels near Sinhagad Fort.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    What are the best pet-friendly hotels in Pune?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Some of the most popular pet-friendly hotels in Pune are
                Marriott Suites Pune, Oakwood Residence Naylor Road Pune, and
                NewLeaf Hotel. See the full list: Pet Friendly Hotels in Pune.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    What are the best hotels with a spa in Pune?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Marriott Suites Pune, The Ritz-Carlton Pune, and Conrad Pune
                have a spa and received excellent reviews from travellers in
                Pune. See the full list: Pune Spa Resorts.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    What are the best romantic hotels in Pune?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Marriott Suites Pune, The Ritz-Carlton Pune, and Conrad Pune
                received great reviews from travellers looking for a romantic
                hotel in Pune. See the full list: Romantic Hotels in Pune.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Which hotels in Pune are good for families?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Marriott Suites Pune, The Ritz-Carlton Pune, and Conrad Pune all
                received great reviews from families travelling in Pune. See the
                full list: Family Hotels in Pune.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <Footer />
    </>
  );
};

export { Hotels };

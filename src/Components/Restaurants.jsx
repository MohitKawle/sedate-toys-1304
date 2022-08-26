import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getRestuarantList } from "../Redux/AppReducer/action";
import styles from './Restaurants.module.css';


const Restaurants = () => {
    let dispatch = useDispatch();
    const Reslist = useSelector((store) => store.AppReducer.restaurantList);

    useEffect(() => {
        dispatch(getRestuarantList);
    }, [dispatch])

    console.log(Reslist);
  

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <p>Restaurants in Pune</p>
            </div>
            <div className={styles.buttomDiv}>
            <div className={styles.filterDiv}>
                    
                    </div>
                    <div className={styles.resDiv}>
                        <div className={styles.sorting}>
    
                        </div>
                        <div className={styles.resListingDiv}>
                            {Reslist.map((hotel) => {
    
                                return <div key={hotel.id} className={styles.hotel}>
                                    <div className={styles.hotelPic}>
                                        <img src={hotel.srcImg} className={styles.imgHotel} alt="hotel_photo" />
                                    </div>
                                    <div className={styles.aboutHotelDiv}>
                                        <div className={styles.hotelName}>{hotel.name}</div>
                                        <div className={styles.hotelDetail}>
                                            <div className={styles.description}>
                                                <p className={styles.aboutHead}>Reviews</p>
                                                <p>{hotel.comment}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
            </div>
        </div>
    )
}

export { Restaurants };
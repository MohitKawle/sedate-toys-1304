import React from "react";
import { useEffect } from "react";
import styles from './Hotels.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getHotelList } from "../Redux/AppReducer/action";


const Hotels = () => {

    let dispatch = useDispatch();
    const list = useSelector((store) => store.AppReducer.hotelList);

    useEffect(() => {
        dispatch(getHotelList);
    }, [dispatch])

    console.log(list);

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <p className={styles.heading}>Pune Hotels and Places to stay</p>
                <p className={styles.subheading}>Enter dates to find the best prices</p>
                <div className={styles.calenderDiv}>
                    <div className={styles.outerDiv1}><div className={styles.innerDiv1}></div></div>
                    <div className={styles.outerDiv2}><div className={styles.innerDiv2}></div></div>
                    <div className={styles.outerDiv3}><div className={styles.innerDiv3}></div></div>
                </div>
            </div>
            <div className={styles.buttomDiv}>
                <div className={styles.filterDiv}>
                    
                </div>
                <div className={styles.hotelsDiv}>
                    <div className={styles.sorting}>

                    </div>
                    <div className={styles.hotelsListingDiv}>
                        {list.map((hotel) => {

                            return <div key={hotel.id} className={styles.hotel}>
                                <div className={styles.hotelPic}>
                                    <img src={hotel.imageSrc} className={styles.imgHotel} alt="hotel_photo" />
                                </div>
                                <div className={styles.aboutHotelDiv}>
                                    <div className={styles.hotelName}>{hotel.name}</div>
                                    <div className={styles.hotelDetail}>
                                        <div className={styles.suggestion}>
                                            <img src={hotel.best_site} className={styles.site} alt="best-site_logo" />
                                             <p>₹{hotel.price}</p>
                                             <button className={styles.button}>View Deals</button>
                                        </div>
                                        <div className={styles.bestOptions}></div>
                                        <div className={styles.description}>
                                            <p>{hotel.about}</p>
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

export { Hotels };
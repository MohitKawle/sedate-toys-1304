import React,{useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from "react-router-dom";
import { placesdata } from '../../Redux/AppReducer/action';
import styles from "./SinglePage.module.css";

const SinglePage = () => {
    const dispatch=useDispatch();

    const {id} = useParams();
    const placesData=useSelector((state)=>state.AppReducer.places)
  
  const [currentData,setCurrentData]=useState({});
  
  useEffect(()=>{
    if(placesData?.length ==0){
      dispatch(placesdata());
    }
  },[dispatch,placesData.length]);
  
  useEffect(()=>{
    if(id){
      //filter the album based on the id
      const data =  placesData.find((album)=>album.id === Number(id) );
      data && setCurrentData(data);
    }
  },[id,placesData]);
  console.log(placesData);
  
    return (
        <div className={styles.head}>
      <div className={styles.single1}>
        <h1 style={{fontSize:"30px"}}>{currentData.title}</h1>
        <div>
            
          <div><h2>{currentData.price}</h2></div>
        </div>
        <div>
          <img style={{width:"900px", height:"600px"}} src={currentData.imageUrl} alt={currentData.name} />
        </div>
        
      </div>
      <div className={styles.single2}>
        
      </div>
      </div>
    );
  };

export default SinglePage
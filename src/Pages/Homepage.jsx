import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import homepage from "./homepage.module.css"
import Carousel31 from '../Components/Carousal31'
import Carousel32 from '../Components/Carousal32'
import tAbb1 from "../Components/SignIn/images/tAbb1.jpg"
import hmid from "../Components/SignIn/images/hmid.jpg"
import OuterNav from '../Components/OuterNav'


const Homepage = () => {
  return (<>
    <Navbar />
    <OuterNav/>
    <div >
      <div className={homepage.hdiv1}>
        <div className={homepage.search}>
          <div className={homepage.div_flex}>
            <img
              className={homepage.search_logo}
              src="https://th.bing.com/th/id/OIP.LoM20QQiY8vmmGmCBwUmwgHaHa?pid=ImgDet&rs=1" alt="" />
            <div className={homepage.search_input}>Where to?</div>
          </div>
        </div>
      </div>

      {/* ways to nagpur */}
      <div className={homepage.way_nagpur}>
        <div className={homepage.ways_to1}
        >Ways to tour Pune District</div>

        <div className={homepage.book_this}

        >Book these experiences for a close-up look at Nagpur District.

        </div>
        <div className={homepage.carousal}>
          { <Carousel31/>}
        </div>
      </div>



      {/* <div>Ways to toor nagpur District</div>
      <div>Get out there</div>
      <div>Top destination for your next holiday</div> */}
    </div> 
      <div className={homepage.margin_top}> 
        <img className={homepage.i_auto}  src={hmid} alt="" />
      </div>
    

    {/* //top destination for your next */}
    <div className={homepage.way_nagpur}>
      <div className={homepage.ways_to2}>Top destinations for your next holiday</div>
      <div className={homepage.carousal}>
          { <Carousel32/>}
        </div>
    </div>

    <div className={homepage.margin_top}> 
      <img src={tAbb1} alt="" />
    </div>

    <Footer />
  </>
  )
}

export default Homepage
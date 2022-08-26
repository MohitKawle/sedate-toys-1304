import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import homepage from "./homepage.module.css"
import Carousel31 from '../Components/Carousal31';
const Homepage = () => {
  return (<>
    <Navbar />
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
        >Ways to tour Nagpur District</div>

        <div className={homepage.book_this}

        >Book these experiences for a close-up look at Nagpur District.

        </div>
        <div>
          { <Carousel31/>}
        </div>
      </div>



      <div>Ways to toor nagpur District</div>
      <div>Get out there</div>
      <div>Top destination for your next holiday</div>
    </div>
    <Footer />
  </>
  )
}

export default Homepage
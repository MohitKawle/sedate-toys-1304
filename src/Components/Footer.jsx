import React from "react";
import Homepage from "../Pages/Homepage";
import footer from "./footer.module.css";
import ind from "../Components/SignIn/images/ind.PNG";

const Footer = () => {
  return (
    <div className={footer.b_Footer}>
      <div className={footer.footer}>
        <div className={footer.div1}>
          <div>About Tripadvisor</div>
          <a href="https://tripadvisor.mediaroom.com/in-about-us"> About Us </a>
          <a href="https://tripadvisor.mediaroom.com/in-contact-us">Press</a>
          <a href="https://tripadvisor.mediaroom.com/in-resources">Careers</a>
          <a href="https://tripadvisor.mediaroom.com/in-resources">
            {" "}
            Trust & Safety
          </a>
          <a href="https://www.tripadvisor.in/business/sponsored-placements?args=-m58399">
            Contact us
          </a>{" "}
        </div>

        <div className={footer.div2}>
          <div>Explore</div>
          <a href="https://tripadvisor.mediaroom.com/in-resources">
            Write a review
          </a>
          <a href="https://tripadvisor.mediaroom.com/in-resources">
            Add a Place
          </a>
          <a href="https://www.tripadvisor.in/MemberProfile">Join </a>
          <a href="https://www.tripadvisor.in/MemberProfile">
            Travellers' Choice
          </a>
          <a href="https://www.tripadvisor.in/business/sponsored-placements?args=-m58399">
            GreenLeaders
          </a>
          <a href="https://www.tripadvisor.in/business/sponsored-placements?args=-m58399">
            Help Centre
          </a>
          <a href="https://www.tripadvisor.in/business/sponsored-placements?args=-m58399">
            Travel Articles
          </a>
        </div>
        <div className={footer.div3}>
          <div>Do Business With Us</div>
          <a href="https://www.tripadvisor.in/business/sponsored-placements?args=-m58399">
            Owners & DMO/CVB
          </a>
          <a href="https://www.tripadvisor.in/business/sponsored-placements?args=-m58399">
            Business Advantage
          </a>
          <a href="https://www.tripadvisor.in/business/sponsored-placements?args=-m58399">
            Sponsored Placements
          </a>
          <a href="https://www.tripadvisor.in/business/sponsored-placements?args=-m58399">
            Access our Content API
          </a>
          <div>Get the App</div>
          <a href="https://www.tripadvisor.in/business/sponsored-placements?args=-m58399">
            iphone app
          </a>
          <a href="https://www.tripadvisor.in/business/sponsored-placements?args=-m58399">
            Android app
          </a>
        </div>
        <div className={footer.div4}>
          <div>Tripadvisor Sites</div>
          <div>
            Book tours tickets on <a href="">Viator</a>{" "}
          </div>
        </div>
      </div>

      <div className={footer.footer_2}>
        <div className={footer.logo}>
          {" "}
          <img
            src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_logoset_solid_green.svg"
            alt=""
          />
        </div>
        <div>
          <div className={footer.rights}>
            <a href="">© 2022 Tripadvisor LLC All rights reserved.</a>
          </div>
          <div
            style={{ display: "flex", margin: "auto" }}
            className={footer.Term_of_use}
          >
            <div>Terms of Use</div>
            <div>Privacy and Cookies Statement</div>
            <div>Cookie consent</div>
            <div>Site Map</div>
          </div>
          <div className={footer.howthe}>How the site Works.</div>
        </div>
        <div style={{ margin: "auto" }}>
          <img src={ind} alt="image" />
        </div>
      </div>
      <div>3</div>

      {/* bfooter */}
    </div>
  );
};

export default Footer;

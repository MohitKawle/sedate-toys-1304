import React, { useEffect, useState } from "react";
import Signin from "../Pages/Signin";
import Modal1 from "./SignIn/Modal1";
import Modal2 from "./SignIn/Modal2";
import DropDown from "./SignIn/DropDown";

import navbar from "../Components/navbar.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux/es/exports";
import { getAuthSucc } from "../Redux/AuthReducer/action";
import { StylesProvider } from "@chakra-ui/react";

const Navbar = () => {
  const basket = useSelector((state) => state.AppReducer.basket);
  const dispatch = useDispatch();
  const [SignIn, SetSignIn] = useState(0);
  const [dropdown_nav, setDropDown_nav] = useState(1);
  useEffect(() => {
    if (dropdown_nav) {
      dispatch(getAuthSucc());
    }
  }, [dropdown_nav]);
  console.log(SignIn);

  return (
    <>
      <div className={navbar.navbarDiv}>
        <Link to="/">
          <div>
            <img
              className={navbar.logo}
              src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
              alt=""
            />
          </div>
        </Link>
        <div className={navbar.divright2}>
          <div className={navbar.flex_logo}>
            <div className={navbar.logo_img}>
              <img
                src="https://th.bing.com/th/id/R.841c81b65e06c00c4860ac66074b3a8d?rik=LcQg2sgre%2bdIbA&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_335398.png&ehk=bk9TqWvYTBPnOlKBTPBlDO4EgUm9VZJwyG8WxaMDPVs%3d&risl=&pid=ImgRaw&r=0"
                alt=""
              />
            </div>
            Review
          </div>

          <div className={navbar.flex_logo}>
            <div className={navbar.logo_img}>
              <img
                src="https://th.bing.com/th/id/R.32e9c6b871e84b6a7bdcf048f75eeeab?rik=fr0fBu%2f7LT231A&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_573021.png&ehk=ceKDjla8U6WJMf5cgPcLF8U59RdrAaTk9aaxIfPlPr4%3d&risl=&pid=ImgRaw&r=0"
                alt=""
              />
            </div>
            Trips
          </div>
          <div className={navbar.flex_logo} id={navbar.login}>
            <div className={navbar.logo_img}>
              <img
                src="https://image.freepik.com/free-icon/small-bell_318-10933.jpg"
                alt=""
              />
            </div>
            Alerts
          </div>

          <div>
            {dropdown_nav ? (
              SignIn ? (
                <Modal2 setDropDown_nav={setDropDown_nav} />
              ) : (
                <Modal1 SetSignIn={SetSignIn} />
              )
            ) : (
              <DropDown
                setDropDown_nav={setDropDown_nav}
                SetSignIn={SetSignIn}
              />
            )}
          </div>
          <div className={navbar.flex_logo}>
            <div className={navbar.logo_img}>
              <Link to="/basket">
                <img
                  fontSize={"20px"}
                  src="https://th.bing.com/th/id/OIP.RVfkrMpz-2sFbKsxmBFd_wHaGF?pid=ImgDet&w=861&h=708&rs=1"
                  alt=""
                />
              </Link>
            </div>
            <Link to="/basket">
              Basket
              <span
                style={{
                  border: "1px solid red",
                  borderRadius: "60px",
                  position: "relative",
                  bottom: "10px",
                  right: "5px",
                  padding: "0px 5px",
                  backgroundColor: "red",
                }}
              >
                <b style={{ color: "white" }}>{basket?.length}</b>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

{
  /* <div>{<Signin/>}</div> */
}

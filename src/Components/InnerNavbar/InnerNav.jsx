import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";
import "./InnerNav.css";
import { innerNavItems } from "./InnerNavItems";

const InnerNav = () => {
  const activeStyle = {
    borderBottom: "3px solid black",
    fontWeight: "bold",
    textDecoration: "none",
    paddingBottom: "0.5rem",
  };
  const style = {
    color: "#333",
    textDecoration: "none",
    fontWeight: "medium",
  };

  const [dropdownPune, setDropdownPune] = useState(false);
  const [dropdownHotel, setDropdownHotel] = useState(false);
  const [dropdownPlacesToVisit, setDropdownPlacesToVisit] = useState(false);

  return (
    <>
      <ul className="nav-items">
        {innerNavItems.map((items) => {
          // ----------------------Pune Navitem with dropdown------------------
          if (items.title === "Pune") {
            return (
              <li
                key={items.id}
                className={items.cName}
                onMouseEnter={() => {
                  setDropdownPune(true);
                  setDropdownHotel(false);
                }}
                onMouseLeave={() => {
                  setDropdownPune(false);
                }}
              >
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : style)}
                  to={items.path}
                >
                  {items.title}
                </NavLink>
                {dropdownPune && <Dropdown />}
              </li>
            );
          }

          // ----------------------Hotels Navitem with dropdown------------------
          if (items.title === "Hotels") {
            return (
              <li
                key={items.id}
                className={items.cName}
                onMouseEnter={() => {
                  setDropdownHotel(true);
                  setDropdownPune(false);
                }}
                onMouseLeave={() => {
                  setDropdownHotel(false);
                }}
              >
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : style)}
                  to={items.path}
                >
                  {items.title}
                </NavLink>
                {dropdownHotel && <Dropdown />}
              </li>
            );
          }

          // ----------------------Places to Visit Navitem with dropdown------------------
          if (items.title === "Places to visit") {
            return (
              <li
                key={items.id}
                className={items.cName}
                onMouseEnter={() => {
                  setDropdownPlacesToVisit(true);
                  setDropdownHotel(false);
                  setDropdownPune(false);
                }}
                onMouseLeave={() => {
                  setDropdownHotel(false);
                }}
              >
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : style)}
                  to={items.path}
                >
                  {items.title}
                </NavLink>
                {dropdownPlacesToVisit && <Dropdown />}
              </li>
            );
          }

          //   ----------------------Navitems------------------
          return (
            <li key={items.id} className={items.cName}>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : style)}
                to={items.path}
              >
                {items.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default InnerNav;

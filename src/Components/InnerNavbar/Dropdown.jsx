import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Dropdown.css";
import { puneTourismDropdown } from "./InnerNavItems";
import { hotelsDropdown } from "./InnerNavItems";
import { placesToVisitDropdown } from "./InnerNavItems";

const Dropdown = () => {
  const [dropdownPune, setDropdownPune] = useState(false);
  const [dropdownHotel, setDropdownHotel] = useState(false);
  const [dropdownPlacesToVisit, setDropdownPlacesToVisit] = useState(false);

  return (
    <>
      {/* ------------------------------------Pune dropdown---------------------------------------------- */}
      <ul
        className={
          dropdownPune ? "puneTourism-submenu clicked" : "puneTourism-submenu"
        }
        onClick={() => setDropdownPune(!dropdownPune)}
      >
        {puneTourismDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className="item.cpName"
                onClick={() => setDropdownPune(false)}
              >
                {item.ptitle}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* ------------------------------------Hotels dropdown---------------------------------------------- */}

      <ul
        className={dropdownHotel ? "hotel-submenu clicked" : "hotel-submenu"}
        onClick={() => setDropdownHotel(!dropdownHotel)}
      >
        {hotelsDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className="item.cName"
                onClick={() => setDropdownHotel(false)}
              >
                {item.htitle}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* ------------------------------------Places to Visit dropdown---------------------------------------------- */}

      <ul
        className={
          dropdownPlacesToVisit
            ? "placestovisit-submenu clicked"
            : "placestovisit-submenu"
        }
        onClick={() => setDropdownPlacesToVisit(!dropdownPlacesToVisit)}
      >
        {placesToVisitDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className="item.cplName"
                onClick={() => setDropdownPlacesToVisit(false)}
              >
                {item.pltitle}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Dropdown;

import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Dropdown.css";
import { puneTourismDropdown } from "./InnerNavItems";

const Dropdown = () => {
  const [dropdownPune, setDropdownPune] = useState(false);

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
    </>
  );
};

export default Dropdown;

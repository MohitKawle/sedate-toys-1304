import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Dropdown.css";
import { puneTourismDropdown } from "./InnerNavItems";

const Dropdown = () => {
  const [dropdownPune, setDropdownPune] = useState(false);

  return (
    <>
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
                className="item.cName"
                onClick={() => setDropdownPune(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Dropdown;

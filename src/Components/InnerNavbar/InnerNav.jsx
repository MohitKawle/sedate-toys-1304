import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import "./InnerNav.css";
import { innerNavItems } from "./InnerNavItems";

const InnerNav = () => {
  const [dropdownPune, setDropdownPune] = useState(false);
  return (
    <>
      <ul className="nav-items">
        {innerNavItems.map((items) => {
          // ----------------------Pune Navitem with dropdown------------------
          if (items.title === "Pune") {
            return (
              <li key={items.id} className={items.cName}>
                <Link
                  to={items.path}
                  onMouseEnter={() => setDropdownPune(true)}
                  onMouseLeave={() => {
                    setDropdownPune(false);
                  }}
                >
                  {items.title}
                </Link>
                {dropdownPune && <Dropdown />}
              </li>
            );
          }

          //   ----------------------Navitems------------------
          return (
            <li key={items.id} className={items.cName}>
              {/* <Link to={items.path}> */}
              {items.title}
              {/* </Link> */}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default InnerNav;

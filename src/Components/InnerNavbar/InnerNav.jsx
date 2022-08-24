import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";
import "./InnerNav.css";
import { innerNavItems } from "./InnerNavItems";

const InnerNav = () => {
  const activeStyle = {
    borderBottom: "3px solid black",
    fontWeight: "bold",
    paddingBottom: "0.5rem",
  };
  const style = {
    color: "#333",
    fontWeight: "medium",
  };

  const [dropdownPune, setDropdownPune] = useState(false);
  return (
    <>
      <ul className="nav-items">
        {innerNavItems.map((items) => {
          // ----------------------Pune Navitem with dropdown------------------
          if (items.title === "Pune") {
            return (
              <li key={items.id} className={items.cName}>
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : style)}
                  to={items.path}
                  onMouseEnter={() => setDropdownPune(true)}
                  onMouseOver={() => setDropdownPune(true)}
                  onMouseLeave={() => {
                    setDropdownPune(false);
                  }}
                >
                  {items.title}
                </NavLink>
                {dropdownPune && <Dropdown />}
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

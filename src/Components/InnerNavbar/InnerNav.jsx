import React, { useState } from "react";
import { NavLink } from "react-router-dom";
//import Dropdown from "./Dropdown";
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
  };

  //const [dropdownPune, setDropdownPune] = useState(false);

  return (
    <>
      <ul className="nav-items">
        {innerNavItems.map((items) => {
          // ----------------------Pune Navitem with dropdown------------------
          // if (items.title === "Hotels") {
          //   return (
          //     <li
          //       key={items.id}
          //       className={items.cName}
          //       onMouseEnter={() => {
          //         setDropdownPune(true);
          //       }}
          //       onMouseLeave={() => {
          //         setDropdownPune(false);
          //       }}
          //     >
          //       <NavLink
          //         style={({ isActive }) => (isActive ? activeStyle : style)}
          //         to={items.path}
          //       >
          //         {items.title}
          //       </NavLink>
          //       {dropdownPune && <Dropdown />}
          //     </li>
          //   );
          // }

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

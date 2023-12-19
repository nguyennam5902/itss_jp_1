import React, { Children } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

const Header = ({ children }) => {
  const menuItem = [
    {
      path: "/userInfo",
      name: "User Info",
    },
    {
      path: "/signup",
      name: "Sign up",
    },
    {
      path: "/login",
      name: "Log in",
    },
    {
      path: "/notification",
      name: "Notification",
    },
    {
      path: "/bookmark",
      name: "Bookmark",
    },
  ];
  return (
    <div className="header_container">
      <div className="header w-full">
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="header_link"
            activeClassName="active"
          >
            <div className="notification">
              {/* <img src={item.icon} alt="" /> */}
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      {/* <main>{children}</main> */}
    </div>
  );
};

export default Header;

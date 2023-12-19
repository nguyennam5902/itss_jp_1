import React, { Children, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

const Header = ({ children }) => {
  const user = sessionStorage.getItem('user')
  // chua dang nhap
  const menuItem1 = [
    {
      path: "/signup",
      name: "Sign up",
    },
    {
      path: "/login",
      name: "Log in",
    },
  ];

  // khi da dang nhap
  const menuItem2 = [
    {
      path: "/userInfo",
      name: "User Info",
    },
    {
      path: "/logout",
      name: "Log out",
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

  useEffect(() =>{
  },[]);

  return (
    <div className="header_container">
      <div className="header w-full">
        {user ?
        menuItem2.map((item, index) => (
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
        ))
        : menuItem1.map((item, index) => (
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
        ))
      }
      </div>
      {/* <main>{children}</main> */}
    </div>
  );
};

export default Header;

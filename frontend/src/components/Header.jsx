import React, { Children, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import icons from "../consts/const.js";

const Header = ({ children }) => {
  const user = JSON.parse(sessionStorage.getItem("user"));
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
      name: user.username,
    },
    {
      path: "/notification",
      name: "",
    },
    {
      path: "/bookmark",
      name: "",
    },
  ];

  useEffect(() => {}, []);

  return (
    <div className="header_container">
      <div className="header w-full">
        {user
          ? menuItem2.map((item, index) => (
              <NavLink
                to={item.path}
                key={index}
                className="header_link"
                activeClassName="active"
              >
                <div className="notification flex items-center">
                  <span className="item-name mr-2">{item.name}</span>
                  {index === 0 && (
                    <img
                      src={icons.Avatar}
                      alt=""
                      className="w-8 h-8 rounded-full"
                    />
                  )}
                  {index === 1 && (
                    <button>
                      <img
                        src={icons.Notification}
                        alt=""
                        className="mt-1 w-6 h-6"
                      />
                    </button>
                  )}
                  {index === 2 && (
                    <button>
                      <img
                        src={icons.BookmarkIcon}
                        alt=""
                        className="mt-1 w-6 h-6"
                      />
                    </button>
                  )}
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
            ))}
      </div>
      {/* <main>{children}</main> */}
    </div>
  );
};

export default Header;

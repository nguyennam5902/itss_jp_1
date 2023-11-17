import React, { Children } from 'react'
import { NavLink } from 'react-router-dom';
import '../App.css'

const Header = ({children}) => {
    const menuItem = [
        {
          path: "/auth",
          name: "Sign in",
        },
        {
          path: "/notification",
          name: "Notification",
        //   icon: "./assets/icons/review.png"
        },
      ]
    return (
        <div className="header_container">
          <div className="header">
            {
              menuItem.map((item, index)=>(
                <NavLink to={item.path} key = {index} className = "header_link" activeClassName = "active">
                    <div className = "notification">
                      {/* <img src={item.icon} alt="" /> */}
                      {item.name}
                    </div>
                </NavLink>
              ))
            }
          </div>
          {/* <main>{children}</main> */}
        </div>
      )
}

export default Header

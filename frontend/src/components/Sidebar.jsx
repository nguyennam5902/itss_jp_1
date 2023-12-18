import React, { Children, useState, useEffect } from 'react'
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import '../App.css'
// import { useAuth } from './path-to-auth-context/AuthContext'
import icons from '../consts/const';

const Sidebar = ({ children }) => {
  const navigate = useNavigate();
  // const { role } = useAuth();
  const location = useLocation();

  // Check if the current route contains '/admin'
  const isAdminRoute = location.pathname.includes('/admin')

  const menuItem = [
    {
      path: "/search",
      name: "Look up",
      icon: icons.SearchIcon
    },
    {
      path: "/review",
      name: "Vocabulary review",
      icon: icons.ReviewIcon
    },
    {
      path: "/learning",
      name: "Vocabulary learning",
      icon: icons.LearningIcon
    },
    {
      path: "/userinformation",
      name: "User Information",
      icon: icons.UserInformationIcon
    },  
  ]

  const adminMenuItem = [
    {
      path: "admin/topic_manage",
      name: "Vocabulary",
      icon: icons.LearningIcon
    },
    {
      path: "admin/approve_comments",
      name: "Approve comments",
      icon: icons.ReviewIcon
    },
  ]

  return (
    <div className="main_screen">
      <div className="sidebar">
        <div className="top_section">
          <h1 className="logo">Logo</h1>
        </div>
        <div className="user_info">
          <h3 className="user_name">Username</h3>
        </div>

        {isAdminRoute === true
          ? (adminMenuItem.map((item, index) => (
            <NavLink to={item.path} key={index} className="link" activeClassName="active">
              <div className="icon">
                <img src={item.icon} alt="" />
              </div>
              <div className="link_text" >{item.name}</div>
            </NavLink>
          ))
          )
          : (
            menuItem.map((item, index) => (
              <NavLink to={item.path} key={index} className="link" activeClassName="active">
                <div className="icon">
                  <img src={item.icon} alt="" />
                </div>
                <div className="link_text" >{item.name}</div>
              </NavLink>
            ))
          )
        }
      </div>
      <main>{children}</main>
    </div>
  )

}

export default Sidebar

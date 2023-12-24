import React, { Children, useState, useEffect } from 'react'
import { NavLink,useNavigate, useLocation } from 'react-router-dom';
import '../App.css'
// import { useAuth } from './path-to-auth-context/AuthContext'
import icons from '../consts/const';

const Sidebar = ({children}) => {
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
      path: "/test",
      name: "Test",
      icon: icons.ReviewIcon
    },
    {
      path: "/learning",
      name: "Vocabulary learning",
      icon: icons.LearningIcon
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
        <div className="top_section justify-center">
          <img src={icons.Logo} className='rounded-[40px] h-20 w-20' alt = ""/>
  
        </div>
        
        {isAdminRoute === true
          ? (adminMenuItem.map((item, index)=>(
              <NavLink to={item.path} key = {index} className = "link" activeClassName = "active">
                  <div className = "icon">
                    <img src={item.icon} alt="" />
                  </div>
                  <div className="link_text" >{item.name}</div>
              </NavLink>
              ))
            )  
          : (
            menuItem.map((item, index)=>(
              <NavLink to={item.path} key = {index} className = "link" activeClassName = "active">
                  <div className = "icon">
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

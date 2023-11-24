import React, { Children } from 'react'
import { NavLink } from 'react-router-dom';
import '../App.css'
import icons from '../consts/const';

const Sidebar = ({children}) => {
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
  ]
  return (
    <div className="main_screen">
      <div className="sidebar">
        <div className="top_section">
          <h1 className="logo">Logo</h1>
        </div>
        <div className="user_info">
          <h3 className= "user_name">Username</h3>
        </div>
        {
          menuItem.map((item, index)=>(
            <NavLink to={item.path} key = {index} className = "link" activeClassName = "active">
                <div className = "icon">
                  <img src={item.icon} alt="" />
                </div>
                <div className="link_text" >{item.name}</div>
            </NavLink>
          ))
        }
      </div>
      <main>{children}</main>
    </div>
  )

}

export default Sidebar

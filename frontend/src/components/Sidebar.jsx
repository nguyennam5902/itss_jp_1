import React, { Children } from 'react'
import { NavLink } from 'react-router-dom';
import '../App.css'
import SearchIcon from '../assets/icons/home.png'
import ReviewIcon from '../assets/icons/review.png'
import LearningIcon from '../assets/icons/learning.png'
const Sidebar = ({children}) => {
  const menuItem = [
    {
      path: "/search",
      name: "Look up",
      icon: SearchIcon
    },
    {
      path: "/review",
      name: "Vocabulary review",
      icon: ReviewIcon
    },
    {
      path: "/learning",
      name: "Vocabulary learning",
      icon: LearningIcon
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

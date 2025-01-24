import React from "react";
import {
  AiOutlineSearch,
  AiOutlineBell,
  AiOutlinePlus,
  AiOutlineMenu,
} from "react-icons/ai";
import { MdMic } from "react-icons/md";
import "./Header.css";

export default function Header({ showSidebar, setShowSidebar, screenSize }) {
  const handleMenuClick = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="header">
      <div className="left-section">
        <button className="menu-icon" onClick={handleMenuClick}>
          <AiOutlineMenu size={24} />
        </button>

        <div className="logo">
          <img
            className="logo-youtube"
            src="https://cdn3.iconfinder.com/data/icons/social-network-30/512/social-06-512.png"
            alt="logo"
          />
          <span className="logoname">YouTube</span>
        </div>
      </div>
      <div className="search-container">
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button className="search-icon">
            <AiOutlineSearch size={20} />
          </button>
        </div>
        <button className="mic-icon">
          <MdMic size={24} />
        </button>
      </div>
      <div className="user-actions">
        <button className="create-icon">
          <AiOutlinePlus size={20} />
          <span>Create</span>
        </button>
        <div className="notification">
          <AiOutlineBell size={24} />
          <span className="badge">9+</span>
        </div>
        <img
          className="user-logo"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
          alt="user-logo"
        />
      </div>
    </div>
  );
}

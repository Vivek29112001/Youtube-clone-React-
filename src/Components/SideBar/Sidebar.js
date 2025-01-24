import React from "react";
import "./Sidebar.css";
import { AiOutlineHome, AiOutlinePlayCircle, AiOutlineAppstore } from "react-icons/ai";

export default function Sidebar() {
  return (
    <div className="Side_container">
      <ul>
        <li>
          <AiOutlineHome size={24} />
          <span>Home</span>
        </li>
        <li>
          <AiOutlinePlayCircle size={24} />
          <span>Shorts</span>
        </li>
        <li>
          <AiOutlineAppstore size={24} />
          <span>Subscription</span>
        </li>
        <li>
          <AiOutlineAppstore size={24} />
          <span>User</span>
        </li>
      </ul>
    </div>
  );
}

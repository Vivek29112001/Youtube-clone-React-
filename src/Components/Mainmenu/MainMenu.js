import React from "react";
import "./MainMenu.css";
import Card from "../Card/Card";
import posts from "../Mainmenu/post.js";

export default function MainMenu() {
  return (
    <div className="Main_container">
      <div className="main-card">
        {posts.map((post, index) => (
          <Card 
            key={index}
            title={post.title}
            description={post.description}
            imageURL={post.image}
            tags={post.tags}
          />
        ))}
      </div>
    </div>
  );
}

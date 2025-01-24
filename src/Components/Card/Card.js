import React from "react";
import "./Card.css";

const Card = ({title, discription, imageURL, tags, date }) => {
    return(
    <div className="card">
        <img src={imageURL} alt={title} className="card-image"/>
        <div className="card-content">
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{discription}</p>
            <p className="card-date">{date}</p>
            <div className="card-tags">
                {tags.map((tag, index)=>(
                    <span key={index} className="card-tag">{tag}</span>
                ))}
            </div>
        </div>
    </div>
    );
}
export default Card;
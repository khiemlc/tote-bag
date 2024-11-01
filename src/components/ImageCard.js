// src/components/ImageCard.js
import React from "react";
import "./ImageCard.css";

const ImageCard = ({ imageSrc, description }) => {
  return (
    <div className="image-card">
      <img src={imageSrc} alt="description" className="image" />
      <p className="description">{description}</p>
    </div>
  );
};

export default ImageCard;

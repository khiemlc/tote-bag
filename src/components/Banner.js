// src/components/Banner.js
import React from "react";
import "./Banner.css";

const Banner = ({ title, subtitle, backgroundImage }) => {
  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1 className="banner-title">{title}</h1>
      <p className="banner-subtitle">{subtitle}</p>
    </div>
  );
};

export default Banner;

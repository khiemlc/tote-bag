// src/components/Home.js
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { imageData } from "../asset/data";
import { imageDataSlider } from "../asset/dataSlider";
import Banner from "./Banner";
import ImageSlider from "./ImageSlider";

// const imageData

function Home() {
  const featuredImages = imageData.slice(0, 5);

  return (
    <div className="home">
      <ImageSlider images={featuredImages} />
      <h1>All Animals On Tote</h1>
      <div className="image-list">
        {imageData.map((image) => (
          <div key={image.id} className="image-item">
            <Link to={`/image/${image.id}`}>
              <img src={image.imageSrc} alt={`Image ${image.id}`} />
            </Link>
            {/* <p>{image.description}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

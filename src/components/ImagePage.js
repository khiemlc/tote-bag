// src/components/ImagePage.js
import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./ImagePage.css";
import { imageData } from "../asset/data";
import ImageCard from "./ImageCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function ImagePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const image = imageData.find((img) => img.id === parseInt(id));

  const handleThumbnailClick = (id) => {
    navigate(`/image/${id}`);
    setShowMenu(false);
  };

  if (!image) {
    return (
      <>
        <p>Image not found</p>
        <Link to="/" className="back-button">
          Go Back
        </Link>
      </>
    );
  }

  return (
    <div className="image-page">
      <div className="menu-container">
        <button onClick={() => setShowMenu(!showMenu)} className="menu-button">
          <FontAwesomeIcon icon={faBars} fade size="2xl" border={false} />
        </button>

        {showMenu && (
          <div className="menu-dropdown">
            {imageData
              .filter((img) => img.id !== image.id)
              .map((img) => (
                <div
                  key={img.id}
                  className="menu-item"
                  onClick={() => handleThumbnailClick(img.id)}
                >
                  <img src={img.imageSrc} alt={`Thumbnail ${img.id}`} />
                  <p className="menu-description">
                    {img.description.length > 30
                      ? img.description.substring(0, 30) + "..."
                      : img.description}
                  </p>
                </div>
              ))}
          </div>
        )}
      </div>

      <h1>{image.title}</h1>
      <ImageCard imageSrc={image.imageSrc} description={image.description} />
      <Link to="/" className="back-button">
        Go Back
      </Link>
    </div>
  );
}

export default ImagePage;

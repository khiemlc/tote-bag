// src/components/ImageSlider.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ImageSlider.css";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Hàm để chuyển đến hình ảnh tiếp theo
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 2000); // 3000ms = 3 giây
    return () => clearInterval(interval); // Xóa interval khi component unmount
  }, [images.length]);

  return (
    <div className="image-slider">
      {images.map((image, index) => (
        <div
          key={image.id}
          className={`slider-item ${
            index === currentIndex ? "active" : "inactive"
          }`}
        >
          {index === currentIndex && (
            <Link to={`/image/${image.id}`}>
              <img src={image.imageSrc} alt={`Slider Image ${image.id}`} />
              {/* <div className="slider-caption">{image.description}</div> */}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;

import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <>
      <div className="image-wrapper">
        <div className="carousel-container flex-center">
          {data.map((item, index) => {
            return (
              <img
                src={item.src}
                alt={item.alt}
                key={index}
                className={slide === index ? "slide" : "slide-hidden"}
              />
            );
          })}
        </div>
      </div>
      <div className="controller-container">
        <div className="carousel-controller">
          <span className="indicators">
            {data.map((_, index) => {
              return (
                <button
                  key={index}
                  onClick={() => setSlide(index)}
                  className={
                    slide === index
                      ? "indicator"
                      : "indicator indicator-inactive"
                  }
                ></button>
              );
            })}
          </span>
          <div className="arrow-container">
            <button onClick={prevSlide} className="arrow-btn">
              <FontAwesomeIcon icon={faChevronLeft} className="arrow" />
            </button>
            <button onClick={nextSlide} className="arrow-btn">
              <FontAwesomeIcon icon={faChevronRight} className="arrow" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;

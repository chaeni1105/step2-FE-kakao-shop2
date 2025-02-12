import React from "react"; // eslint-disable-line no-unused-vars
import MainProductTemplate from "../components/templates2/MainProductTemplate";
import Carousel from "../components/atoms/Carousel";
import { useState, useEffect } from "react";

const staticServerUrl = process.env.REACT_APP_PATH || "";

const slides = [
  staticServerUrl + "/carouselItem1.jpeg",
  staticServerUrl + "/carouselItem2.jpeg",
  staticServerUrl + "/carouselItem3.jpeg",
];

const HomePage = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      // cleanup
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Carousel>
        {slides.map((s) => ( // Add the 'key' prop here
          <li key={s} className="carousel-item">
          <img src={s} width={width} />
        </li>
      ))}
      </Carousel>
      <h1>Home Page</h1>
      <MainProductTemplate />
    </div>
  );
};

export default HomePage;
import React from "react";
import NetflixSlider from "./components/NetflixSlider";

const Slider = ({ results }) => {
  const movies = [
    {
      id: 1,
      image: "/images/slide1.jpg",
      imageBg: "/images/slide1b.webp",
      title: "1983",
    },
    {
      id: 2,
      image: "/images/slide2.jpg",
      imageBg: "/images/slide2b.webp",
      title: "Russian doll",
    },
    {
      id: 3,
      image: "/images/slide3.jpg",
      imageBg: "/images/slide3b.webp",
      title: "The rain",
    },
    {
      id: 4,
      image: "/images/slide4.jpg",
      imageBg: "/images/slide4b.webp",
      title: "Sex education",
    },
    {
      id: 5,
      image: "/images/slide5.jpg",
      imageBg: "/images/slide5b.webp",
      title: "Elite",
    },
    {
      id: 6,
      image: "/images/slide6.jpg",
      imageBg: "/images/slide6b.webp",
      title: "Black mirror",
    },
  ];
  return (
    <NetflixSlider>
      {results.map((result) => (
        <NetflixSlider.Item result={result} key={result?.id.raw}>
          item1
        </NetflixSlider.Item>
      ))}
    </NetflixSlider>
  );
};

export default Slider;

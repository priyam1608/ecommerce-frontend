import React, { useState, useRef } from "react";
import ProductCorousalCard from "../productCorousalCard/ProductCorousalCard";
import AliceCarousel from "react-alice-carousel";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button } from "@mui/material";

const ProductCorousal = ({ category, categoryItems }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const slideNext = () => {
    carouselRef.current.slideNext();
  };

  const slidePrev = () => {
    carouselRef.current.slidePrev();
  };

  const handleSlideChanged = (e) => {
    setActiveIndex(e.item);
  };

  const items = categoryItems
    .slice(0, 15)
    .map((item) => <ProductCorousalCard item={item} />);
  return (
    <div className="relative px-4 lg:px-8">
      <div>
        <h3 className="text-2xl font-extrabold text-gray-800 mb-4">
          {category}
        </h3>
      </div>
      <div className="p-5 border">
        <AliceCarousel
          ref={carouselRef}
          items={items}
          responsive={responsive}
          disableDotsControls
          disableButtonsControls
          onSlideChanged={handleSlideChanged}
        />
      </div>
      <div className="overflow-hidden"></div>
      {activeIndex !== 0 && (
        <Button
          onClick={slidePrev}
          className="z-50"
          variant="contained"
          sx={{
            position: "absolute",
            top: "12rem",
            left: "0rem",
            transform: "rotate(90deg)",
            bgcolor: "white",
            color: "black",
          }}
          aria-label="prev"
        >
          <KeyboardArrowLeftIcon sx={{ transform: "rotate(-90deg)" }} />
        </Button>
      )}
      {activeIndex !== items.length - 5 && (
        <Button
          onClick={slideNext}
          className="z-50"
          variant="contained"
          sx={{
            position: "absolute",
            top: "12rem",
            right: "0rem",
            transform: "rotate(90deg)",
            bgcolor: "white",
            color: "black",
          }}
          aria-label="next"
        >
          <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)" }} />
        </Button>
      )}
    </div>
  );
};

export default ProductCorousal;

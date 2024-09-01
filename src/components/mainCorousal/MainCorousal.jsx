import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import mainCarouselData from "./mainCorousalData";

const items = mainCarouselData.map((item) => <img src={item.image} alt="" /> );

const MainCorousal = () => {
  return (
    <AliceCarousel
      mouseTracking
      items={items}
      autoPlay
      autoPlayInterval={1000}
      infinite
      controlsStrategy="alternate"
      disableButtonsControls
    />
  );
};

export default MainCorousal;

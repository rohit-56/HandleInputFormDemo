import React from "react";
import Cards from "../cards/Cards";
import Carousel from "react-elastic-carousel";

function ImplCarousel() {
  return (
    <>
      <Carousel itemsToScroll={1} itemsToShow={2}>
        <Cards title={1} />
        <Cards title={2} />
        <Cards title={3} />
        <Cards title={4} />
        <Cards title={5} />
        <Cards title={6} />
      </Carousel>
    </>
  );
}
export default ImplCarousel;

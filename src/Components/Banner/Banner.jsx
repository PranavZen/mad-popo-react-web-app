import React from "react";
import Pricecard from "../PriceCard/Pricecard";

import TypedComponent from "../TypedComponent";

function Banner() {
  return (
    <div>
      <TypedComponent />
      <div className="header-hero-pricing-plans position-relative">
        <Pricecard />
      </div>
      
    </div>
  );
}

export default Banner;

import React from "react";
import { Carousel } from "react-responsive-carousel";

//images
import banner1 from "../../images/banner1.jpg";
import banner2 from "../../images/banner2.jpg";
import banner3 from "../../images/banner3.jpg";

export const Carrossel= () => (
  <Carousel
    autoPlay
    showThumbs={false}
    showStatus={false}
    interval={3000}
    infiniteLoop={true}
  >
    <div>
      <img alt="" src={banner1} />
    </div>
    <div>
      <img alt="" src={banner2} />
    </div>
    <div>
      <img alt="" src={banner3} />
    </div>
  </Carousel>
);

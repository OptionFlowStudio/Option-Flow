import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomeSliderBlock from "../../pages/Home/HomeSliderBlock";

const SliderComponent = ({ sliderData }) => {
  const [amountSlider, setAmountSlider] = useState(null);
  useEffect(() => {
    if (window.innerWidth > 1000) {
      setAmountSlider(3);
    } else if (window.innerWidth < 673) {
      setAmountSlider(1);
    } else {
      setAmountSlider(2);
    }
    return () => {};
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: amountSlider,
    slidesToScroll: 1,
  };
  return (
    <>
      {sliderData.length > 0 ? (
        <div className="slider-container">
          <Slider {...settings}>
            {sliderData.map((item) => (
              <HomeSliderBlock
                sliderTitle={item.title}
                sliderIcon={item.iconType}
                sliderContent={item.subtitle}
                sliderLink={item.id}
                key={item.id.toString()}
              />
            ))}
          </Slider>
        </div>
      ) : null}
    </>
  );
};

export default SliderComponent;

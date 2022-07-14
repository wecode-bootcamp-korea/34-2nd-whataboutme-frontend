import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ItemList from "../itemList/ItemList";

const ListCarousel = ({ recommendMotel }) => {
  return (
    <>
      <SlideTitle>추천 모텔</SlideTitle>
      <StyledSlider {...settings}>
        {recommendMotel.map((datas, index) => (
          <ItemList data={datas} key={index} />
        ))}
      </StyledSlider>
    </>
  );
};

const StyledSlider = styled(Slider)`
  .slick-arrow {
    display: none;
  }

  .slick-prev {
    display: none;
  }

  .slick-prev::before {
    display: none;
  }

  .slick-next {
    display: none;
  }

  .slick-next::before {
    display: none;
  }
`;

const SlideTitle = styled.h2`
  font-size: ${({ theme: { style } }) => style.fontSizes.xxl};
  margin-bottom: 10px;
`;

export default ListCarousel;

const settings = {
  autoplay: true,
  autoplayspeed: 1000,
  pauseOnHover: true,
  dots: false,
  infinite: true,
  speed: 500,
  slideToShow: 2,
  slidesToScroll: 1,
  arrows: false,
};

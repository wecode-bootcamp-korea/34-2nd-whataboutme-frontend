import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ItemList from "../itemList/ItemList";

const ListCarousel = ({ recommendMotel }) => {
  return (
    <>
      <SlideTitle color="#f5303f">추천 모텔</SlideTitle>
      <StyledSlider {...settings}>
        {recommendMotel?.map(data => (
          <ItemList data={data} key={data.id} />
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
  @font-face {
    font-family: "GangwonEduPowerExtraBoldA";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/GangwonEduPowerExtraBoldA.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  color: ${props => props.color};
  font-family: "GangwonEduPowerExtraBoldA";
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

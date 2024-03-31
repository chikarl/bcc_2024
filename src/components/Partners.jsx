import React from "react";
import styled from "styled-components";

import Carousel from "./Carousel";
// import { ScrollingCarousel } from '@trendyol-js/react-carousel';
// import Item from '../utils/helper'
function Partners() {
  return (
    <Wrapper>
      <div className="main">
        <h2 className="container">Our Partners</h2>
        <div className="carousel-div">
          <Carousel />
        </div>
        <div className="btn-center">
          <button className="btn"><a href="#">Become a Sponsor</a></button>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #fef8e6;
  .main{
    padding: 68px 0;
  }
  .carousel-div{
    padding: 68px 0;
    /* width: calc(1530px - 161px); */
    margin-left: calc((100% - 80%) / 2) !important;
  }
  .btn-center {
    display: flex;
    justify-content: center;
  }
  button {
    background-color: transparent;
    border: 1px solid black;
  }
  a{
    color: black;
  }
  @media screen and (max-width: 1280px) {
  /* insert styles here */
  .carousel-div{
    margin-left: calc((100% - 1256px) / 2) ;
  }
}
`;
export default Partners;

import React from "react";
import { Link } from "react-router-dom";
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
          <button className="btn button"><Link to='#'>Become a Sponsor</Link></button>
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
  /* button {
    background-color: transparent;
    border: 1px solid black;
  } */
  /* button {
  transition: all 1s ease;
}
  button:hover {
    background-color:white;
    color: black;
  } */
  a{
    color: black;
  }
  .button {
  pointer-events: auto;
  cursor: pointer;
  border: none;
  margin: 0;
  position: relative;
  display: inline-block;
  background-color: #fff;
}
.button::before,
.button::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.button {
  border-radius: 3rem;
  border: 1px solid #000;
  overflow: hidden;
  /* color:; */
}
.button a{
  position: relative;
  mix-blend-mode: difference;
  color: #fff !important;
}

.button::before {
  content: '';
  background: #fef8e6;
  transition: transform 0.5s cubic-bezier(0.7, 0, 0.2, 1);
}

.button:hover::before {
  transform: translate3d(0, 100%, 0);
}
  @media screen and (min-width: 1281px) {
  /* insert styles here */
  .carousel-div{
    margin-left: calc((100% - 1256px) / 2) !important;
  }
}
`;
export default Partners;

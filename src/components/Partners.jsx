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
          <Link to='#'><button className="btn button">Partner with Us</button></Link>
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
    /* margin-left: calc((100% - 80%) / 2) !important; */
  }
  .btn-center {
    display: flex;
    justify-content: center;
  }
  a{
    color: black; 
  }
.button {
  cursor: pointer;
    background-color: transparent;
    padding: 0 5px;
    /* border: 1px solid transparent; */
    overflow: hidden;
    position: relative;
    text-decoration: none;
    transition: 0.2s transform ease-in-out;
    will-change: transform;
    z-index: 0;
    padding: 24px 48px;
  border: 1px solid black;
  border-radius: 36px;
  font-size: 1rem;
  color: black;
}

.button::after {
  background-color: black;
  border-radius: 3rem;
  content: "";
  display: block;
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  transform: translate(-100%, 0) rotate(10deg);
  transform-origin: top left;
  transition: 0.2s transform ease-out;
  will-change: transform;
  z-index: -1;
}

.button:hover::after {
  transform: translate(0, 0);
}

.button:hover {
  border: 2px solid transparent;
  color: white;
  transform: scale(1.05);
  will-change: transform;
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
  /* a{
    color: black; */
  /* }
  .button {
  pointer-events: auto;
  cursor: pointer;
  border: none;
  margin: 0;
  position: relative;
  display: inline-block;
  background-color: #000;
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
  overflow: hidden; */
  /* color:; */
/* }
.button a{
  position: relative;
  mix-blend-mode: difference;
  color: #fff !important;
} */
/* 
.button::before {
  content: '';
  background: #fff;
  transition: transform 0.5s cubic-bezier(0.7, 0, 0.2, 1);
}
.button:hover{
  color: red;
  
}
.button:hover::before {
  transform: translate3d(0, 100%, 0);
} */
  /* @media screen and (min-width: 1281px) {
  insert styles here
  .carousel-div{
    margin-left: calc((100% - 1256px) / 2) !important;
  }
} */
`;
export default Partners;

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import img1 from "../assets/logos/CITS Main Horizontal 3.svg";

import Carousel from "./Carousel"
function Partners() {
  return (
    <Wrapper>
      <div className="main">
        <h2 className="container">Official Sponsor</h2>
        <div className="center carousel-div">
          <div className="card">
            <img src={img1} alt="" className="w-full aspect-square hidden" />
          </div>
        </div>
        <h2 className="container">Sponsors and Partners</h2>
        <div className="carousel-div">
          <Carousel />
        </div>
        <div className="btn-center">
          <Link to="mailto:info@bcc.com">
            <button className="btn button">Partner with Us</button>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #fef8e6;
  text-align: center;
  align-items: center;
  padding: 128px 0;
  .center{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

  }
  .carousel-div {
    padding: 23px 0 64px 0 ;
  }
  .btn-center {
    display: flex;
    justify-content: center;
  }
  a {
    color: black;
  }
  .button {
    cursor: pointer;
    background-color: transparent;
    padding: 0 5px;
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
  .card {
    background-color: white;
    scroll-snap-align: start;
    border-radius: 24px;
    padding: 32px;
    max-height: 193px;
    width: 404px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .card img {
    height: 100%;
  }
      @media only screen and (max-width: 425px) {
      .card{
        padding: 16px;
        width: 350px;
      }
    }
`;
export default Partners;

import React from "react";
import styled from "styled-components";
import video1 from "../assets/exhibition.mp4";

function Exhibition() {
  return (
    <Wrapper>
      <div className="container">
        <div style={{ flex: "0 0 50%" }}>
          <h2>Join Us for an Exciting Exhibition!</h2>
          <p style={{ padding: "20px 0" }}>
            We invite businesses, entrepreneurs, creatives, and innovators to
            showcase their products and services at our upcoming exhibition.
            This is a great opportunity to connect, promote, and grow your
            brand. a platform to showcase creativity, innovation, and
            excellence. Kindly complete your registration by filling out the
            form here:
          </p>
          <div>
            <a href="https://forms.gle/dAZvD3AewpBvr6Tz7">
              <button className="btn white button">Register Now</button>
            </a>
          </div>
        </div>
        <div>
          <video src={video1} controls></video>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 100px 0 0px 0;
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
  }
  h2 {
    font-family: "Product Sans Black";
    font-size: 64px;
    font-weight: 700;
    line-height: 76px;
  }
  button.btn {
    padding: 20px 52px;
    border: 1px solid black;
    font-size: 16px;
  }
  .button {
    cursor: pointer;
    background-color: transparent;
    color: black;
    padding: 0 5px;
    border: 1px solid;
    overflow: hidden;
    position: relative;
    text-decoration: none;
    transition: 0.2s transform ease-in-out;
    will-change: transform;
    z-index: 0;
    border-radius: 36px;
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
  .button:hover img {
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg)
      brightness(100%) contrast(100%);
  }
  video {
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }
`;
export default Exhibition;

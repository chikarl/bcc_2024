import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { winners2022top8 } from "../utils/winners";
import styled, { keyframes } from "styled-components";
import img1 from "../assets/BCC23IMG_1.png";
import arrow from "../assets/Add.svg";
// import arrow from "../assets/ArrowWhite.svg";

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

// Keyframes for the slide-out effect
const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

function TeamCarousel() {
  const [people, setPeople] = useState(winners2022top8);
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 10000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <Wrapper>
      <div className="container"> <h2>Our Top 10 teams</h2></div>
      {people.map((person, personIndex) => {
        const { id, title, members,description, iframe_src, color } = person;

        const divColor = {
          borderColor: color,
        };
        let position = "nextSlide";
        if (personIndex === index) {
          position = "activeSlide";
        }
        if (
          personIndex === index - 1 ||
          (index === 0 && personIndex === people.length - 1)
        ) {
          position = "lastSlide";
        }
        return (
          <article className={position} key={id}>
            <div className="container">
              <div className="flex-row" key={id} style={divColor}>
              <div>
                <h3>{title}</h3>
                <h5>{members.map((member, index) =>(
                  <span key={index}>{member}, </span>
                ))}</h5>
                <p>{description}</p>
                <div>
                  <button
                          className="btn-arrow white button"
                          onClick={() => setIndex(index + 1)}>
                          <img src={arrow} alt="" />
                        </button>
                </div>
              </div>
              <div>
                <iframe
                  width="560"
                  height="315"
                  src={iframe_src}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen></iframe>
              </div>
            </div>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  position: relative;
  margin: 100px 0;
  height: 450px;
  /* margin: 0 auto; */
  /* margin-top: 4rem; */
  /* position: relative; */
  /* display: flex; */
  overflow: hidden;
  @font-face {
    font-family: "Product Sans Black";
    src: url(../assets/fonts/ProductSans-Black.ttf);
  }
  span {
    font-family: "Product Sans Black";
    font-size: 250px;
    color: rgb(255, 255, 255, 0.1);
    /* margin-bottom: px; */
  }
  .flex-col {
    align-items: start;
    /* position: relative; */
    margin: 20px 0;
    /* margin-left: 80px; */
    flex: 0 1 0;
  }
  .container {
    display: flex;
    overflow: hidden;
    border-radius: 48px;
  }

  .text-section {
    background-color: var(--blue); /* Replace with actual color */
    height: 450px;
    color: white;
    /* padding: 40px; */
    flex: 0 0 50%; /*Do not grow, do not shrink, start at 50% of the parent*/
    display: flex;
    /* flex-direction: column; */
    /* justify-content: center; */
  }

  .image-section {
    flex: 0 0 50%;
    background-image: url(${img1});
    background-size: cover;
    background-position: center;
  }

  .register-info {
    display: flex;
    align-items: center;
    position: relative;
    /* margin-top:20px; */
    margin-left: 80px;
  }
  
  button.btn {
    /* background-color: transparent; */
    /* color: white; */
    padding: 20px 52px;
    /* border: none; */
    border: 1px solid white;
    /* border-radius: 36px; */
    /* font-size: 1rem; */
    margin: 20px 0 40px 0;
    font-size: 16px;
  }
  /* a {
    text-decoration: none;
    color: white !important;
    font-family: "Product Sans";
  } */

  .button {
    cursor: pointer;
    background-color: transparent;
    padding: 0 5px;
    /* color: white; */
  }
  .button {
    background-color: transparent;
    padding: 0 5px;
    border: 1px solid ;
    overflow: hidden;
    position: relative;
    text-decoration: none;
    transition: 0.2s transform ease-in-out;
    will-change: transform;
    z-index: 0;
    border-radius: 36px;
      padding: 8px 28px;
  }
  .black.button::after {
    background-color: black;
  }
  .black.button {
    color: black;
  }
  .black.button:hover {
    color: white;
  }
  .white.button::after {
    background-color: white;
  }
  .white.button:hover {
    color: black;
  }
  .white.button {
    color: white;
  }
  .button::after {
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
    /* color: var(--blue); */
    transform: scale(1.05);
    will-change: transform;
  }
  .button:hover img {
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg)
      brightness(100%) contrast(100%);
  }

  article {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: var(--transition);
  }
  article.activeSlide {
    opacity: 1;
    transform: translateX(0);
    animation: ${slideIn} 1s ease-in-out forwards; // Use the animation
  }

  article.lastSlide {
    opacity: 1;
    animation: ${slideOut} 1s ease-in-out forwards; // Use the animation
  }

  article.nextSlide {
    transform: translateX(100%);
  }
`;

export default TeamCarousel;

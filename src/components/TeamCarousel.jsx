import React, { useState, useEffect } from "react";
import { winners2024top10 } from "../utils/winners";
import styled, { keyframes } from "styled-components";
import arrow from "../assets/Arrow Right.svg";
import team_pic from "../assets/blog1.png"

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
  const [people, setPeople] = useState(winners2024top10);
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

  return (
    <Wrapper>
      <div className="container">
        {" "}
        <h2 className="title">Our Top 10 teams 2024</h2>
      </div>
      {people.map((person, personIndex) => {
        const { id, title, members, description, iframe_src, color } = person;

        const divColor = {
          backgroundColor: color,
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
              <div className="flex-row" style={divColor}>
                <div>
                  <h3>{title}</h3>
                  <h5>
                    {members.map((member, index) => (
                      <span key={index}>{member}, </span>
                    ))}
                  </h5>
                  <p>{description}</p>
                  <div>
                    <button
                      className="btn-arrow black button"
                      onClick={() => setIndex(index + 1)}>
                      <img src={arrow} alt="" />
                    </button>
                  </div>
                </div>
                <div>
                  {
                    iframe_src == '' ? <img src={team_pic} alt="" /> :<iframe
                      width="560"
                      height="315"
                      src={iframe_src}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen ></iframe>
                  }
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
  height: 650px;
  overflow: hidden;
  article {
    padding-top: 100px;
  }
  .button {
    background-color: transparent;
    padding: 0 5px;
    border: 1px solid black;
    overflow: hidden;
    position: relative;
    text-decoration: none;
    transition: 0.2s transform ease-in-out;
    will-change: transform;
    z-index: 0;
    border-radius: 36px;
    padding: 8px 28px;
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
    background-color: black;
  }

  .button:hover {
    border: 2px solid transparent;
    color: var(--blue);
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
  .flex-row {
    padding: 30px;
    background-color: #e8f2ff;
    color: #000;
    align-items: center;
    border-radius: 48px;
    gap: 20px;
    height: 540px;
  }
  .flex-row > div {
    width: 50%;
  }
  p {
    padding-bottom: 10px;
  }
  h3 {
    font-family: "Product Sans Black";
    font-size: 48px;
    line-height: 50px;
  }
  h5 {
    padding: 30px 0 10px 0;
    font-size: 20px;
  }
  iframe, img {
    border-radius: 32px;
    width: 100%;
  }
    @media only screen and (max-width: 1024px) {
      height: 1024px;
      .flex-row{
        flex-direction: column-reverse;
        height: 100%;
      }
      .flex-row > div{
        width: 100%;
      }
      
    }
`;

export default TeamCarousel;

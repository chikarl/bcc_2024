import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { winners2023 } from "../utils/winners";

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

function Top3Section() {
  const [people, setPeople] = useState(winners2023);
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
      <Wrapper className="section">
        <div className="container">
          {people.map((person, personIndex) => {
            const {
              id,
              title,
              team_position,
              content,
              color,
              bg_color,
              bg_img,
              demo_video,
              arrow,
            } = person;
            const divStyle = {
              color: color,
              backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0), ${bg_color}),
    url(${bg_img})`,
            };
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
                  <div style={divStyle} className="main flex-row">
                    <div className="container">
                      <div className="winners">
                        <h2>Meet our 2023 Winners</h2>
                        <div className="">
                          <h1>{title}</h1>
                          <h2>{team_position}</h2>
                          <p>{content}</p>
                          <div>
                            {color === "black" ? (
                              <div className="flex-row">
                                <button className="btn button black">
                                  View Dome
                                </button>
                                <button className="btn button black ">
                                  Read More
                                </button>
                                <button
                                  className="btn-arrow black button"
                                  onClick={() => setIndex(index + 1)}
                                  style={divColor}>
                                  <img src={arrow} alt="" />
                                </button>
                              </div>
                            ) : (
                              <div className="flex-row">
                                <button
                                  className="btn button white "
                                  style={divColor}>
                                  Watch Demo
                                </button>
                                <button
                                  className="btn button white "
                                  style={divColor}>
                                  Read Article
                                </button>
                                <button
                                  className="btn-arrow white button"
                                  onClick={() => setIndex(index + 1)}
                                  style={divColor}>
                                  <img src={arrow} alt="" />
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
            );
          })}
        </div>
      </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  margin: 0 auto;
  position: relative;
  display: flex;
  overflow: hidden;
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
  .main {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100%;
  }

  .container .winners {
    margin: 0;
    justify-content: end;
    display: flex;
    flex-direction: column;
    height: 100%;
    padding-bottom: 100px;
    width: 625px;
  }
  h1 {
    font-family: "Product Sans Light";
    font-size: 96px;
    line-height: 100px;
    padding: 30px 0 10px 0;
  }
  h2 {
    font-size: 36px;
  }
  p {
    padding-bottom: 20px;
  }
  .button {
    cursor: pointer;
    background-color: transparent;
    padding: 0 5px;
    border: 1px solid;
    overflow: hidden;
    position: relative;
    text-decoration: none;
    transition: 0.2s transform ease-in-out;
    border-radius: 36px;
    padding: 8px 24px;
    will-change: transform;
    z-index: 0;
  }
  .btn {
    margin-right: 20px;
    padding: 15px 48px;
    font-size: 16px;
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
    color: var(--blue);
    transform: scale(1.05);
    will-change: transform;
  }
  .button:hover img {
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg)
      brightness(100%) contrast(100%);
  }
  @media only screen and (max-width: 1024px) {
    
  height: 100vh;
    h1 {
      font-size: 64px;
      line-height: 70px;
      padding: 15px 0 10px 0;
    }
    h2 {
      font-size: 24px;
    }
    p {
      padding-bottom: 20px;
    }
    .container .winners {
      width: 100%;
      padding-bottom: 50px;
    }
    .button {
      padding: 8px 20px;
      font-size: 14px;
    }
  }
  @media only screen and (max-width: 425px) {
  height: 80%;
}
`;
export default Top3Section;

import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { winners2024 } from "../utils/winners";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMultiply } from "@fortawesome/free-solid-svg-icons";
import team_pic from "../assets/blog1.png"
import { Link } from "react-router-dom";


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

function Top3Section({ year, data }) {
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");
  const getImg = (demo_video) => {
    setTempImgSrc(demo_video);
    setModel(true);
    console.log(tempImgSrc);
    
  };

  const [people, setPeople] = useState(winners2024);
  const [index, setIndex] = React.useState(0);
  // console.log(people);

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
    }, 10100);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <Wrapper className="section">
      <div className={model ? "model open" : "model"}>
        <FontAwesomeIcon icon={faMultiply} onClick={() => setModel(false)} />
        <div className="video">
          {tempImgSrc == "" ? (
            <img src={team_pic} alt="" />
          ) : (
            <iframe
              width="560"
              height="315"
              src={tempImgSrc}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
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
            article_link
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
                    <h2>Meet our {year} Winners</h2>
                    <div className="">
                      <h1>{title}</h1>
                      <h2>{team_position}</h2>
                      <p>{content}</p>
                      <div>
                        {color === "black" ? (
                          <div className="flex-row">
                            <button
                              className="btn button black"
                              onClick={() => {
                                getImg(demo_video);
                              }}
                            >
                              Watch Demo
                            </button>
                            
                            <Link to={article_link} >
                            <button className="btn button black ">Read More
                            </button>
                            </Link>
                            <button
                              className="btn-arrow black button"
                              onClick={() => setIndex(index + 1)}
                              style={divColor}
                            >
                              <img src={arrow} alt="" />
                            </button>
                          </div>
                        ) : (
                          <div className="flex-row">
                            <button
                              className="btn button white "
                              style={divColor}
                            >
                              Watch Demo
                            </button>
                            <button
                              className="btn button white "
                              style={divColor}
                            >
                              Read Article
                            </button>
                            <button
                              className="btn-arrow white button"
                              onClick={() => setIndex(index + 1)}
                              style={divColor}
                            >
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
    margin-right: 32px;
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
      padding-bottom: 32px;
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
    height: 80vh;

    .btn {
      margin-right: 20px;
    }
  }

  .model {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000000;
    transition: opacity 0.4s ease, visibility 0.4s ease,
      transform 0.5s ease-in-out;
    visibility: hidden;
    opacity: 0;
    transform: scale(0);
    overflow: hidden;
    z-index: 999;
  }
  .model.open {
    visibility: visible;
    opacity: 1;
    transform: scale(1);
  }
  .model img {
    width: auto;
    max-width: 100%;
    height: auto;
    display: block;
    line-height: 0;
    box-sizing: border-box;
    padding: 20px 0 20px;
    margin: 0 auto;
  }
  .model.open svg {
    cursor: pointer;
    position: fixed;
    top: 10px;
    right: 10px;
    width: 2rem;
    height: 2rem;
    padding: 5px;
    border-color: rgba(0, 0, 0, 0.4);
    color: #fff;
  }
`;
export default Top3Section;

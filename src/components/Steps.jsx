import React, { useState, useEffect } from "react";
import { timeline } from "../utils/helper";
import styled, { keyframes } from "styled-components";

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

function App() {
  const [people, setPeople] = useState(timeline);
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
    <>
      <Wrapper className="section">
        <div className="container">
          {people.map((person, personIndex) => {
            const {
              id,
              title,
              data,
              arrow,
              color,
              bg_color,
              bg_image,
              class_name,
            } = person;
            const divStyle = {
              color: color,
              backgroundColor: bg_color, // Camel cased CSS property
              // backgroundImage: `url(${bg_image})`,
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
              <>
                <article className={position} key={id}>
                  <div style={divStyle} className="main">
                    <div className="bg-img">
                      <div>
                        <img src={bg_image} alt="" className="test-bg" />
                      </div>
                      <div className="container timeline">
                        <h4>Timeline</h4>
                        <div className={class_name}>
                        <h1>{title}</h1>
                        <h2>{data}</h2>
                        <div style={{ zIndex: 100 }}>
                          {color === "black" ? (<button
                            className="btn-arrow black button"
                            onClick={() => setIndex(index + 1)}
                            style={divColor}>
                            <img src={arrow} alt="" />
                          </button>): <button
                            className="btn-arrow white button"
                            onClick={() => setIndex(index + 1)}
                            style={divColor}>
                            <img src={arrow} alt="" />
                          </button>}
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </>
            );
          })}
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  height: 814px;
  margin: 0 auto;
  margin-top: 4rem;
  position: relative;
  display: flex;
  overflow: hidden;
  .test-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
  .timeline-item-4{
    margin: 0 0 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
        width: 300px;
  }
  .btn-arrow {
    z-index: 100px;
    cursor: pointer;
    border: 2px solid red;
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
  .main {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 100%;
  }
  .timeline {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }
  .timeline h4 {
    font-size: 32px;
    padding: 130px 0 60px 0;
  }
  .timeline h1 {
    font-family: "Product Sans Light";
    font-size: 64px;
  }
  .timeline h2 {
    font-size: 36px;
    padding: 20px 0 30px 0;
  }
  .timeline h2,
  .timeline h4 {
    font-family: "Product Sans";
    font-weight: 100;
  }
  
/* .button {
  background-color: transparent;
  padding: 0 5px;
  color: white;
} */
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
      padding: 8px 28px;
    will-change: transform;
    z-index: 0;
}

.black.button::after {
  background-color: black;
}
.white.button::after {
  background-color: white;
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
.button:hover img{
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);
}
`;
export default App;

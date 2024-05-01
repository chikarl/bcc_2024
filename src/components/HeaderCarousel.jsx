import React, { useState, useEffect } from "react";
import { headerImages } from "../utils/helper";
import styled, { keyframes } from "styled-components";

// Keyframes for the slide-in effect
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
  const [people, setPeople] = useState(headerImages);
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
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <Wrapper>
      {people.map((person, personIndex) => {
        const { id, image } = person;

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
            <img src={image} alt={id} className="person-img" />
          </article>
        );
      })}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: 100vh;

  img {
    width: 100% !important;
    height: auto;
    padding: 0;
    margin: 0;
    object-fit: cover;
    object-position: center;
  }

  article {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 1s ease-in-out; // Adjust the timing as needed
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
export default App;

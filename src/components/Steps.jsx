import React, { useState, useEffect } from "react";
// import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
// import { FaQuoteRight } from 'react-icons/fa';
import styled from "styled-components";
import { timeline } from "../utils/helper";

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

  // useEffect(() => {
  //   let slider = setInterval(() => {
  //     setIndex(index + 1);
  //   }, 10000);
  //   return () => {
  //     clearInterval(slider);
  //   };
  // }, [index]);

  return (
    <>
      <Wrapper className="section">
        <div className="section-center container">
          {people.map((person, personIndex) => {
            const { id, title, data, arrow, color, bg_color, bg_image } =
              person;
            const divStyle = {
        color: color,
        backgroundColor: bg_color, // Camel cased CSS property
        // backgroundImage: `url(${bg_image})`,
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
              // <article className={position} key={id}>
              //   <img src={bg_image} alt={title} className="person-img" />
              //   <h4>{data}</h4>
              //   <p className="title">{title}</p>
              //   <p className="text">{bg_color}</p>

              // </article>
              <>
              <article className={position} key={id}>
              <div style={divStyle} className="main">
                <div className="bg-img">
                  <div>
                    <img src={bg_image} alt="" className="test-bg"/>
                  </div>
                  <div className="container timeline">
                    <h4>Timeline</h4>

                    <h1>{title}</h1>

                    <h2>{data}</h2>
                    <div style={{zIndex: 100}}>
                      <button
                        className="btn-arrow"
                        onClick={() => setIndex(index + 1)}>
                        <img src={arrow} alt="" />
                      </button>
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
    .test-bg{
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }
    .btn-arrow{
      z-index: 100px;
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
  }
  article.lastSlide {
    transform: translateX(-100%);
  }
  article.nextSlide {
    transform: translateX(100%);
  }
.main{
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


`;
export default App;

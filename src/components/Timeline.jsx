import React, { useState, useEffect } from "react";
import styled from "styled-components";
import bg_img from "../assets/img/bg_img1.png";
import arrow_bg from "../assets/Arrow Right.svg";
import { timeline } from "../utils/helper";




function Timeline() {
  
  const [items, setItems] = useState(timeline);
  const [index, setIndex] = useState(0);
    useEffect(() => {
    const lastIndex = items.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, items]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);


  return (
    <Wrapper className="carousel">
    {items.map((item, itemIndex) => {
      const { id, title, data, arrow, color, bg_color, bg_image } = item;
      const divStyle = {
        color: color,
        backgroundColor: bg_color, // Camel cased CSS property
        backgroundImage: `url(${bg_image})`,
      };
      let position = 'nextSlide'
      if (itemIndex === index) {
        position = 'activeSlide'
      }
      if (
        itemIndex === index - 1 ||
        (index === 0 && itemIndex === items.length - 1)
      ) {
        position = 'lastSlide'
      }

      return(
    <div key={id} style={divStyle} className="main">
      <div className="bg-img" >
        <div className="container timeline">
          <h4>Timeline</h4>

          <h1>
            {title}
          </h1>

          <h2>{data}</h2>
          <div>
            <button className="btn-arrow" onClick={() => setIndex(index +1)}>
              <img src={arrow} alt="" />
            </button>
          </div>
          
        </div>
      </div>
      <button className="btn-arrow" onClick={() => {setIndex(index +1); console.log(index, itemIndex);}}>
        testing
              <img src={arrow_bg} alt="" />
      </button>
      </div>
        )
      })}
      
      </Wrapper>
  );
}
const Wrapper = styled.div`
  @font-face {
    font-family: "Product Sans Light";
    src: url(./assets/fonts/ProductSans-Light.ttf);
  }
  height: 814px;
  overflow: hidden;
  .main{
  background-color: black;
  background-image: url(${bg_img});
  color: white;
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
export default Timeline;

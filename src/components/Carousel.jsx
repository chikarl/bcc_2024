// import { useState, useRef, useEffect } from "react";
import styled from "styled-components";

// Data
import data from "../assets/data.json";

const Carousel = () => {

  return (
    <Wrapper>
      <div>
        <div className="carrousel">
            {data.resources.map((resource, index) => {
            return (
              <div
                key={index} className="card" >
                  <img
                    src={resource.imageUrl || ''}
                    alt={resource.title}
                    className="w-full aspect-square hidden"
                  />
              </div>
            );
          })}

        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .conteudo{
    width: 450px;
  }

.carrousel{ 
  display: grid;
  grid-auto-flow: column;
  scroll-behavior: auto; gap: 1.2rem;
  overflow-y: auto;
  overscroll-behavior-x: contain; 
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
}
.carrousel::-webkit-scrollbar{
  display: none;
}
.card {
  background-color: white;
  scroll-snap-align: start;
  /* border-radius: 30px; */
  padding: 32px;
  max-height: 193px;
  min-width: 404px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card svg{
  height: 128px;
}
/* .card:nth-child(odd) {
  background: linear-gradient(-229deg, #fbd52d, #ef3a7b);
}
.card:nth-child(even) {
  background: linear-gradient(-220deg, #ff70af, #5fa8f5);
  } */
`
export default Carousel;

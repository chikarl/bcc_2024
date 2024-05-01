
import styled from "styled-components";
import { resources } from "../utils/data";

const Carousel = () => {

  return (
    <Wrapper>
      <div>
        <div className="carrousel">
            {resources.map((resource, index) => {
            return (
              <div
                key={index} className="card" >
                  <img
                    src={resource.image || ''}
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
  border-radius: 24px;
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
`
export default Carousel;

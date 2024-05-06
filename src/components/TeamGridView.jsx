import React from "react";
import styled from "styled-components";
import { winners2023top8 } from "../utils/winners";

function TeamGridView() {
  return (
    <Wrapper>
      <h2>Meet Our Top 8 Teams of 2023</h2>
      <div className="row">
        {winners2023top8.map((team, index) => {
          const { id, title, members, description, iframe_src, color } = team;
          const divColor = { backgroundColor: color };
          return (
            <div className="flex-col" key={id} style={divColor}>
              <div>
                <h3>{title}</h3>
                <h5>
                  {members.map((member, index) => (
                    <span key={index}>{member}, </span>
                  ))}
                </h5>
              </div>
              <div className="video">
                <iframe
                  width="560"
                  height="315"
                  src={iframe_src}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen ></iframe>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin: 100px 0;
  .video{
    width: 100%;
  }
  .row{
    display: grid;
    grid-template-columns: 50% 50%;
    gap: 20px;
  }
  .flex-col {
    padding: 20px;
    background-color: #e8f2ff;
    color: #000;
    border-radius: 48px;
    flex-direction: column-reverse;

  }

  p {
    padding-bottom: 32px;
  }
  h3 {
    font-family: "Product Sans Black";
    font-size: 48px;
    line-height: 50px;
  }
  h5 {
    padding: 30px 0 30px 0;
    font-size: 20px;
  }
  iframe, img {
    border-radius: 32px 32px 0 0;
    width: 100%;
  }
  
    @media only screen and (max-width: 1024px) {
      .row{
        grid-template-columns: 100%;
      }
    }
`;
export default TeamGridView;

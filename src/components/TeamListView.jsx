import React from "react";
import styled from "styled-components";
import { winners2024top10 } from "../utils/winners";
import team_pic from "../assets/blog1.png"

function TeamListView() {
  return (
    <Wrapper>
      {/* <h2>Meet Our Top 10 Teams</h2> */}
      <div>
        {winners2024top10.map((team, index) => {
          const { id, title, members, description, iframe_src, color } = team;
          const divColor = { backgroundColor: color };
          return (
            <div className="flex-row" key={id} style={divColor}>
              <div>
                <h3>{title}</h3>
                <h5>
                  {members.map((member, index) => (
                    <span key={index}>{member}, </span>
                  ))}
                </h5>
                <p>{description}</p>
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
          );
        })}
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin: 100px 0;
  .flex-row {
    padding: 20px;
    background-color: #e8f2ff;
    color: #000;
    align-items: center;
    border-radius: 48px;
    gap: 20px;
    margin-top: 48px;
  }
  .flex-row > div {
    width: 50%;
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
    border-radius: 32px;
    width: 100%;
  }
  @media only screen and (max-width: 1024px) {
      .flex-row{
        flex-direction: column-reverse;
      }
      .flex-row > div{
        width: 100%;
      }
    }
`;
export default TeamListView;

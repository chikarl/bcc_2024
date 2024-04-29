import React from "react";
import styled from "styled-components";
import { winners2022top8 } from "../utils/winners";

function TeamListView() {
  return (
    <Wrapper>
      <h2>Meet Our Top 10 Teams</h2>
      <div>
        {winners2022top8.map((team, index) => {
          const { id, title, members,description, iframe_src, color } = team;
          const divColor = {backgroundColor: color}
          return (
            <div className="flex-row" key={id} style={divColor}>
              <div>
                <h3>{title}</h3>
                <h5>{members.map((member, index) =>(
                  <span key={index}>{member}, </span>
                ))}</h5>
                <p>{description}</p>
              </div>
              <div>
                <iframe
                  width="560"
                  height="315"
                  src={iframe_src}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen></iframe>
              </div>
            </div>
          );
        })}
        <div className="flex-row">
          <div>
            <h3>Matazm</h3>
            <h5>Tim Paul Junior, Akwo Thomas, Budi Hitler</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa rem
              tenetur consequuntur delectus rerum iste facilis, quibusdam beatae
              deserunt pariatur non velit saepe nesciunt alias consequatur
              officiis quo impedit? Iusto.
            </p>
          </div>
          <div>
            <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/etsJQieHEyw"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin: 100px 0;
  .flex-row{
    padding: 20px;
    background-color: #E8F2FF;
    color: #000;
    align-items: center;
    border-radius: 48px;
    gap: 20px;
    margin-top: 48px;
  }
  .flex-row > div{
    width: 50%;
  }
  h3{
  font-family: "Product Sans Black";
    font-size: 48px;
  }
  h5{
    font-size: 20px;
  }
  iframe{
    border-radius: 32px;
    width: 100%;
    /* height: 100%; */
  }
`;
export default TeamListView;

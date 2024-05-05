import React from "react";
import styled from "styled-components";
import hero_img from "../assets/hero_img.svg";
import Nav from "./Nav";

function header() {
  return (
    <Wrapper>
      <div className="container hero">
        <Nav />
        <div className="hero_text">
          <p>
            Organized by the Bamenda Tech Community, the challenge is open to
            individuals and teams who have innovative ideas and projects that
            address important social, economic, and environmental challenges
            facing the community. Participants are encouraged to submit projects
            that leverage technology to create solutions that have a positive
            impact on the community
          </p>
          <p>
            The Bamenda Community Challenge provides an excellent opportunity
            for aspiring entrepreneurs to receive mentorship, training, and
            funding to help develop their ideas into viable businesses. The
            competition has attracted a wide range of participants from various
            sectors including health, education, agriculture, and finance..
          </p>
        </div>
      </div>
      <div className="hero_img">
        <img src={hero_img} alt="" />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  background-color: #4c25ef;
  color: white;
  .hero {
    padding-top: 3rem;
  }
  .hero_text {
    margin-left: auto;
    width: 937px;
    font-style: normal;
    font-size: 16px;
  }
  p {
    padding-bottom: 20px;
  }
  .hero_img {
    height: 100%;
    margin: 0 0 -7px 0;
    padding: 0;
  }
  .hero_img img {
    width: 100%;
    height: 100vh;
    height: auto;
    margin: 0;
    padding: 0;
    object-fit: cover;
    object-position: center;
  }
  @media only screen and (max-width: 1024px) {
    .hero {
    padding-top: 0rem;
  }
  }
`;
export default header;

import React from "react";
import styled from "styled-components";

function CriteriaSection() {
  return (
    <Wrapper>
      <div className="container">
        <h2>Evaluation Criteria</h2>
        <div className="flex-row">
          <div className="flex-col">
            <div>
              <h1>40%</h1>
            </div>
            <h3>Impact</h3>
            <p>
              Does your project tackle a major issue faced by Bamenda residents?
              We want solutions that address real needs and make a positive
              difference.
            </p>
          </div>
          <div>
            <h1>20%</h1>
            <h3>UNSDG Adherance</h3>
            <p>
              Can your project function and be maintained long-term? We're
              seeking solutions that are realistic and involve the community for
              continued success.
            </p>
          </div>
        </div>
        <div className="flex-row" style={{ paddingTop: "44px" }}>
          <div className="flex-col">
            <div>
              <h1>20%</h1>
            </div>
            <h3>Sustainability</h3>
            <p>
              Is your project idea clear and easy to understand? A strong
              prototype showcases the core features and user-friendliness of
              your solution.
            </p>
          </div>
          <div>
            <h1>10%</h1>
            <h3>Design</h3>
            <p>
              Can your project be replicated to serve more people or address
              broader issues? We value solutions with growth potential for wider
              impact.
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 100px 0 0px 0;
  .flex-row {
    gap: 40px;
  }
  .flex-row > div {
    width: 50%;
  }
  .flex-row h1 {
    font-family: "Product Sans Black";
    /* color: rgb(0, 0, 0, 0.1); */
    color: #E4DFFF;
    font-size: 200px;
    line-height: 125px;
    text-align: left;
    margin: 48px 0;
  }
  h3 {
    font-family: "Product Sans Black";
    font-size: 64px;
    font-weight: 700;
    /* padding-top: 48px; */
    line-height: 76.8px;
  }
  @media only screen and (max-width: 1024px) {
    .flex-row {
      flex-direction: column;
    }
    .flex-row > div {
      width: 100%;
    }
    .flex-row h1 {
      font-size: 150px;
      /* line-height: 100px; */
      margin: 0;
    }
    h3 {
      font-size: 46px;
      line-height: 60px;
    }
    h2 {
      margin-bottom: 20px;
    }
  }
`;
export default CriteriaSection;

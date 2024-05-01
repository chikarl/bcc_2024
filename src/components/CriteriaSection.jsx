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
              Lorem ipsum dolor sit amet consectetur. Quam luctus nulla morbi
              tincidunt aenean netus et sit. Id odio id in eu semper eu mattis
              tristique sit. Facilisi egestas urna sagittis sed donec. Sed orci
              dolor
            </p>
          </div>
          <div>
            <h1>20%</h1>
            <h3>UNSDG Adherance</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Quam luctus nulla morbi
              tincidunt aenean netus et sit. Id odio id in eu semper eu mattis
              tristique sit. Facilisi egestas urna sagittis sed donec. Sed orci
              dolor Lorem ipsum dolor sit amet consectetur. Quam luctus nulla
              morbi tincidunt aenean netus et sit. Id odio id in eu semper eu
              mattis
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
              Lorem ipsum dolor sit amet consectetur. Quam luctus nulla morbi
              tincidunt aenean netus et sit. Id odio id in eu semper eu mattis
              tristique sit. Facilisi egestas urna sagittis sed donec. Sed orci
              dolor tincidunt aenean netus et sit. Id odio id in eu semper eu
              mattis
            </p>
          </div>
          <div>
            <h1>10%</h1>
            <h3>Design</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Quam luctus nulla morbi
              tincidunt aenean netus et sit. Id odio id in eu semper eu mattis
              tristique sit. Facilisi egestas urna sagittis sed donec. Sed orci
              dolor
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
    color: rgb(0, 0, 0, 0.1);
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
`;
export default CriteriaSection;

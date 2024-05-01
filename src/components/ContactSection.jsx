import React from "react";
import styled from "styled-components";
import img1 from "../assets/25.jpg";

function ContactSection() {
  return (
    <Wrapper id="contact">
      <div className="container register">
        <div className="text-section">
          <div className="register-info">
            <div>
              <div className="text-area">
                <h2>Let's work together</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Quam luctus nulla
                  morbi tincidunt aenean netus et sit. Id odio id in eu semper
                  eu mattis tristique sit. Facilisi egestas urna sagittis sed
                  donec. Sed orci dolor{" "}
                </p>
              </div>
              <div className="flex-col">
                <a href="mailto:hello@bamendacommunitychallenge.com">
                  <button className="btn white button">Contact Us</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="image-section"></div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  position: relative;
  margin: 100px 0;
  overflow: hidden;
  .container {
    display: flex;
    overflow: hidden;
    border-radius: 48px;
  }
  .text-section {
    background-color: black; /* Replace with actual color */
    color: white;
    flex: 0 0 50%; /*Do not grow, do not shrink, start at 50% of the parent*/
    display: flex;
  }

  .image-section {
    flex: 0 0 50%;
    background-image: url(${img1});
    background-size: cover;
    background-position: center;
  }

  .register-info {
    display: flex;
    align-items: center;
    position: relative;
    margin-left: 64px;
    margin-right: 64px;
  }
  .register-info p {
    margin: 48px 0;
    font-size: 20px;
  }
  .register-info > div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .register-info {
    padding: 68px 0;
  }
  .register-info h2 {
    font-family: "Product Sans Black";
    font-size: 64px;
    font-weight: 700;
    line-height: 76px;
  }

  .register-img img {
    border-radius: 0 32px 32px 0;
    width: 100%;
    height: 450px;
  }

  button.btn {
    padding: 20px 52px;
    border: 1px solid white;
    font-size: 16px;
  }
  .button {
    cursor: pointer;
    background-color: transparent;
    color: white;
    padding: 0 5px;
    border: 1px solid;
    overflow: hidden;
    position: relative;
    text-decoration: none;
    transition: 0.2s transform ease-in-out;
    will-change: transform;
    z-index: 0;
    border-radius: 36px;
  }
  .button::after {
    background-color: white;
    border-radius: 3rem;
    content: "";
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    transform: translate(-100%, 0) rotate(10deg);
    transform-origin: top left;
    transition: 0.2s transform ease-out;
    will-change: transform;
    z-index: -1;
  }

  .button:hover::after {
    transform: translate(0, 0);
  }

  .button:hover {
    border: 2px solid transparent;
    color: black;
    transform: scale(1.05);
    will-change: transform;
  }
  .button:hover img {
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg)
      brightness(100%) contrast(100%);
  }
`;
export default ContactSection;

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo_white.svg";
import sponsor from "../assets/sponsor_white.svg";
import arrow from "../assets/ArrowUpRight.svg";

function FooterSection() {
  return (
    <Wrapper>
      <div className="container">
        <div className="flex-row">
          <div>
            <Link to="/">
              <img src={logo} alt="BCC" />
            </Link>
          </div>
          <div>
            <ul className="flex-col">
              <li className="footer_btn">
                <a
                  href="https://www.facebook.com/profile.php?id=100091474623246"
                  target="_blank">
                  Facebook
                </a>
                <img src={arrow} alt="" />
              </li>
              <li className="footer_btn">
                <a
                  href="https://instagram.com/bamendacommunitychallenge?igshid=YmMyMTA2M2Y"
                  target="_blank">
                  Instagram
                </a>
                <img src={arrow} alt="" />
              </li>
              <li className="footer_btn">
                <a
                  href="https://www.linkedin.com/company/bamendacommunitychallenge/"
                  target="_blank">
                  LinkedIn
                </a>
                <img src={arrow} alt="" />
              </li>
              <li className="footer_btn">
                <a href="https://x.com/bcc_237" target="_blank">
                  Twitter/X
                </a>
                <img src={arrow} alt="" />
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-row flex-bottom">
          <div>
            {/* <Link to="https://cits.cm/" target="_blank">
              <img src={sponsor} alt="CIT" />
            </Link> */}
          </div>
          <div>
            <ul className="flex-row">
              <li>
                <Link to="#about">About</Link>
              </li>
              <li>
                <Link to="/">
                  <a href="mailto:info@bamendacommunitychallenge.com">
                    Become a Sponsor
                  </a>
                </Link>
              </li>
              <li>
                <Link to="./#contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 50px 0;
  color: white;
  background-color: black;
  ul {
    list-style: none;
  }
  ul.flex-col {
    align-items: end;
    justify-content: center;
    justify-self: center;
    justify-items: center;
    text-align: center;
  }
  ul.flex-col li {
    display: flex;
    justify-self: center;
    justify-items: center;
    text-align: center;
    padding-bottom: 16px;
  }
  ul.flex-col li img {
    margin-left: 10px;
  }
  li {
    margin: 0 10px;
    padding: 0;
  }
  li a {
    color: white;
    text-decoration: none;
    font-size: 16px;
  }
  li img {
    width: 24px;
    height: 24px;
  }
  .flex-row {
    justify-content: space-between;
    padding: 20px;
  }
  .flex-bottom {
    align-items: end;
  }
  .flex-bottom li a {
    color: rgba(255, 255, 255, 0.5);
  }
  .flex-bottom li a:hover {
    color: rgba(255, 255, 255, 1);
    transition: 0.5s ease-in-out;
  }
  .footer_btn {
    background-color: transparent;
    padding: 0 5px;
    border: 1px solid transparent;
    overflow: hidden;
    position: relative;
    text-decoration: none;
    transition: 0.2s transform ease-in-out;
    will-change: transform;
    z-index: 0;
  }

  .footer_btn::after {
    background-color: white;
    content: "";
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    transform: translate(0%, 100%);
    transition: 0.2s transform ease-out;
    will-change: transform;
    z-index: -1;
  }

  .footer_btn:hover::after {
    transform: translate(0, 0);
  }

  .footer_btn:hover {
    border: 2px solid transparent;
    color: black;
    transform: scale(1.05);
    will-change: transform;
    justify-content: center;
    padding: 10px;
  }
  .footer_btn:hover a {
    color: #000;
  }
  .footer_btn:hover img {
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg)
      brightness(100%) contrast(100%);
  }

  @media only screen and (max-width: 1024px) {
    ul.flex-row {
      flex-wrap: wrap;
      padding: 0 20px;
      justify-content: end;
    }
    ul.flex-row a {
      font-size: 14px;
    }
    .flex-row {
      align-items: center;
    }
    a img {
      width: 200px;
      padding: 20px 0;
    }
    .container > div {
      padding: 0;
    }
  }
`;
export default FooterSection;

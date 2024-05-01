import React from "react";
import styled from "styled-components";
import logoBlack from "../assets/logo-black.svg";
import logoWhite from "../assets/logo_white.svg";
import { Link } from "react-router-dom";

const BlogNavbar = ({ blog }) => {
  if (!blog || !blog.acf) {
    return null; // Return null if singlePost is not set or acf property is not available
  }
  const logo_color = blog.acf.color;
  const divColor = {
    color: logo_color,
  };
  return (
    <Wrapper>
      <div className="flex-row">
        <div>
          <Link to="/" className="logo">
            {logo_color === "#000000" ? (
              <img src={logoBlack} alt="" />
            ) : (
              <img src={logoWhite} alt="" />
            )}
          </Link>
        </div>
        <div>
          <ul>
            <li>
              <a href="#" style={divColor}>
                TImeline
              </a>
            </li>
            <li>
              <a href="#" style={divColor}>
                Prizes
              </a>
            </li>
            <li>
              <a href="#" style={divColor}>
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .flex-row {
    display: flex;
    justify-content: space-between;
    padding: 20px 0px;
  }

  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: 0;
  }

  li {
    margin: 0 10px;
    padding: 0;
  }

  li a {
    text-decoration: none;
    font-size: 14px;
  }

  @media only screen and (max-width: 1024px) {
    .logo {
      height: 100px;
    }

    .logo img {
      height: 100%;
    }
  }
`;

export default BlogNavbar;

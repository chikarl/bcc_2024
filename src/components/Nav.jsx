import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      <div className="flex-row">
        <div>
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
        </div>
        <div className="menu">
          <h1 icon="fa-solid fa-bars" className="hamburger" onClick={toggleMenu} > Bars </h1>
          <ul className={isOpen ? "active" : ""}>
            <li>
              <a href="#">Timeline</a>
            </li>
            <li>
              <Link to="/winners">Winners</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .flex-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0px;
    background-color: #4c25ef;
    color: white;
  }

  .menu {
    display: flex;
    align-items: center;
  }

  ul {
    display: flex;
    list-style: none;
    padding: 0;
  }

  li {
    margin: 0 10px;
    padding: 0;
  }

  li a {
    color: white;
    text-decoration: none;
    font-size: 14px;
  }

  .hamburger {
    display: none;
    cursor: pointer;
    font-size: 20px;
    margin-right: 20px;
  }

  @media only screen and (max-width: 425px) {
    .menu {
      position: relative;
    }

    ul {
      display: none;
      flex-direction: column;
      position: absolute;
      top: 100%;
      left: 0;
      background-color: #4c25ef;
      padding: 10px;
      width: 100%;
    }

    ul.active {
      display: flex;
    }

    .hamburger {
      display: block;
    }
    img{
      width: 350px;
    }
  }
`;

export default Nav;

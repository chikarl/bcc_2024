import React from "react";
import styled from "styled-components";
import { blogs } from "../utils/blogs";
import blog1 from "../assets/blog1.png";
import arrow from "../assets/Arrow Right.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function BlogSection() {
  return (
    <Wrapper>
      <div className="container">
        <h2>Blog</h2>
        {blogs.slice(0, 3).map((blog) => {
          const { id, title, image } = blog;
          // console.log(id);
          return (
            <div className="flex-row" key={id}>
              <div>
                <div className="rev-col">
                  <h3>{title}</h3>
                  <Link to={`/blog/${id}`}>
                    <button>
                      Read More{" "}
                      <img src={arrow} alt="" className="arrow_icon" />
                    </button>
                  </Link>
                </div>
              </div>
              <div className="blog-img">
                <img src={image} alt="" />
              </div>
            </div>
          );
        })}
        <div className="btn-center">
          <Link to="/blog">
        <button className="btn button ">View More</button>
        </Link>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin: 100px 0;
  h2 {
    margin-bottom: 48px;
  }
  .test {
    font-size: 20px;
    padding-left: 10px;
  }
  .flex-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* margin-bottom: 58px; */
  }
  .flex-row:nth-child(odd) {
    flex-direction: row-reverse;
  }
  .flex-row > div {
    width: 50%;
  }
  .flex-row button {
    display: flex;
    align-items: center;
    background-color: transparent;
    font-size: 16px;
    padding: 8px 24px;
    border: 1px solid #000;
    border-radius: 44px;
    cursor: pointer;
    font-family: "GeneralSans-Variable";
    color: black;
    overflow: hidden;
    position: relative;
    text-decoration: none;
    transition: 0.2s transform ease-in-out;
    will-change: transform;
    z-index: 0;
  }

  .flex-row button::after {
    background-color: black;
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

  .flex-row button:hover::after {
    transform: translate(0, 0);
  }

  .flex-row button:hover {
    border: 2px solid transparent;
    color: white;
    transform: scale(1.05);
    will-change: transform;
  }
  .flex-row .button a {
    color: #000;
  }
   .flex-row button:hover img.arrow_icon{
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);
   }
  img.arrow_icon {
    width: 28px !important;
    height: 28px !important;
    margin-left: 5px;
  }
  h3 {
    font-size: 40px;
    margin-bottom: 32px;
  }
  .flex-row:nth-child(odd) .rev-col {
    margin-right: 0;
    margin-left: 50px;
  }
  .rev-col {
    margin-right: 50px;
  }
  .blog-img img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 32px;
  }
  .btn-center {
    display: flex;
    justify-content: center;
    padding-top: 48px;
  }
  a {
    color: black;
  }
  .button {
    cursor: pointer;
    background-color: transparent;
    padding: 0 5px;
    /* border: 1px solid transparent; */
    overflow: hidden;
    position: relative;
    text-decoration: none;
    transition: 0.2s transform ease-in-out;
    will-change: transform;
    z-index: 0;
    padding: 24px 48px;
    border: 1px solid black;
    border-radius: 36px;
    font-size: 1rem;
    color: black;
  }

  .button::after {
    background-color: black;
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
    color: white;
    transform: scale(1.05);
    will-change: transform;
  }
`;
export default BlogSection;

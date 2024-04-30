import React, { useState, useEffect } from "react";
import styled from "styled-components";
//import { blogs } from "../utils/blogs";
import blog1 from "../assets/blog1.png";
import arrow from "../assets/Arrow Right.svg";
import { Link } from "react-router-dom";
import axios from "axios";

function BlogSection({ post }) {
  const { title, id, featured_media, author } = post;
  const [imgUrl, setImgUrl] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  console.log(title, id, featured_media, author);
  // const getImageUrl = axios.get(`https://livewellcmr.com/wp-json/wp/v2/media/${featured_media}`)
  // const getAuthor = axios.get(`https://livewellcmr.com/wp-json/wp/v2/users/${author}`)
  useEffect(() => {
    axios.get(`https://bcc.christmastreeemporium.com/wp-json/wp/v2/media/${featured_media}`)
      .then(res => {
        setImgUrl(res.data.media_details.sizes.full.source_url);
        setIsLoaded(true);
      })
      .catch(err => console.log(err));
  }, []);
  if(!isLoaded) {
    return null;
  }
  return (
    <Wrapper className="flex-row">
          {/* <div > */}
              <div>
                <div className="rev-col">
                  <h3>{title.rendered}</h3>
                  <Link to={`/blog/${id}`}>
                    <button>
                      Read More{" "}
                      <img src={arrow} alt="" className="arrow_icon" />
                    </button>
                  </Link>
                </div>
              </div>
              <div className="blog-img">
                <img src={imgUrl} alt="" />
              </div>
            {/* </div> */}

    </Wrapper>
  );
}
const Wrapper = styled.div`
  /* margin: 100px 0; */
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
  /* .flex-row:nth-child(even) {
    flex-direction: row-reverse;
  } */
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
  .flex-row:nth-child(even) .rev-col {
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
`;
export default BlogSection;
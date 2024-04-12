import React, { useState } from "react";
import { blogs } from "../utils/blogs";
import BlogNavbar from "../components/BlogNavbar";
import img1 from "../assets/blog2.png";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function SingleBlog() {
  const { blog_id } = useParams();
  const [blog, setBlog] = useState(blogs[blog_id]);
  const { id, title, image, author, content, bg_color, color } = blog;
  console.log(blog);
  const divStyle = {
    color: color,
    backgroundColor: bg_color,
  };
  return (
    <Wrapper>
      <div>
        <div className="blog-header" style={divStyle}>
          <div className="container">
            <BlogNavbar blog={blog} />
            <div className="blog-info">
            <div className="flex-row">
              <div className="flex-col">
                <h6>Blog</h6>
                <h2>{title}</h2>
                <p>
                  by <span>{author}</span>
                </p>
              </div>
              <div>
                <img src={image} alt="" />
              </div>
            </div>
            </div>
          </div>
        </div>
        <div className="container">
          <p>{content}</p>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .blog-header {
    height: 100vh;
  }
  .blog-header .container .blog-info {
    height: calc(100vh - 160px);
  }
  .flex-row {
    align-items: center;
    height: 100%;
  }
  h2 {
    font-family: "Product Sans Medium";
    font-size: 72px;
    font-weight: 600;
    line-height: 72px;
    padding: 20px 0;
  }
  p,
  h6 {
    font-size: 16px;
  }
  span {
    font-family: "Product Sans Medium";
  }
`;

export default SingleBlog;

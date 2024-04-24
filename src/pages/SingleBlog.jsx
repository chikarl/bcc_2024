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
        <div className="blog_container">
        
      <div dangerouslySetInnerHTML={{ __html: content }} />
          <p>
            Lorem ipsum dolor sit amet consectetur. Quam luctus nulla morbi
            tincidunt aenean netus et sit. Id odio id in eu semper eu mattis
            tristique sit. Facilisi egestas urna sagittis sed donec. Sed orci
            dolor donec laoreet hendrerit. Adipiscing faucibus mi ut sagittis
            et. In etiam aenean sollicitudin libero eu ac lacus urna eget. Ac
            eget sed lectus diam. Laoreet semper viverra a in ornare velit in
            elementum. Ipsum interdum nunc scelerisque consequat phasellus
            viverra ultrices pellentesque tempus. Condimentum pellentesque enim
            duis lorem eget id sed ac eu. Sodales morbi vitae nunc aliquet nibh
            diam. Egestas quam purus venenatis sagittis pretium at nulla at.
            Tortor magnis tempus nunc mauris id at blandit varius. Feugiat arcu
            facilisis sit cras volutpat nisl odio in. Nunc gravida quam amet
            proin et eu tortor fusce. Cursus eget in cursus blandit sed. Dui
            arcu aenean scelerisque senectus viverra. Molestie non ipsum congue
            dolor est odio. Sit ultricies lectus vitae porttitor dictum diam
            ullamcorper. Eu nulla ut nisi velit quis nullam nisi viverra. Non
            dolor malesuada in dolor ac nulla ornare sagittis. Cursus in
            vestibulum viverra vitae sit egestas ullamcorper libero nunc. Nibh
            praesent quam adipiscing faucibus in a. Accumsan interdum ante a
            arcu tellus ultricies semper tellus dolor.
            <p></p>
            Lorem ipsum dolor sit amet consectetur. Quam luctus nulla morbi
            tincidunt aenean netus et sit. Id odio id in eu semper eu mattis
            tristique sit. Facilisi egestas urna sagittis sed donec. Sed orci
            dolor donec laoreet hendrerit. Adipiscing faucibus mi ut sagittis
            et. In etiam aenean sollicitudin libero eu ac lacus urna eget. Ac
            eget sed lectus diam. Laoreet semper viverra a in ornare velit in
            elementum. Ipsum interdum nunc scelerisque consequat phasellus
            viverra ultrices pellentesque tempus. Condimentum pellentesque enim
            duis lorem eget id sed ac eu. Sodales morbi vitae nunc aliquet nibh
            diam. Egestas quam purus venenatis sagittis pretium at nulla at.
            Tortor magnis tempus nunc mauris id at blandit varius. Feugiat arcu
            facilisis sit cras volutpat nisl odio in. Nunc gravida quam amet
            proin et eu tortor fusce. Cursus eget in cursus blandit sed. Dui
            arcu aenean scelerisque senectus viverra. Molestie non ipsum congue
            dolor est odio. Sit ultricies lectus vitae porttitor dictum diam
            ullamcorper. Eu nulla ut nisi velit quis nullam nisi viverra. Non
            dolor malesuada in dolor ac nulla ornare sagittis. Cursus in
            vestibulum viverra vitae sit egestas ullamcorper libero nunc. Nibh
            praesent quam adipiscing faucibus in a. Accumsan interdum ante a
            arcu tellus ultricies semper tellus dolor.{" "}
          </p>
          <img src={img1} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur. Quam luctus nulla morbi
            tincidunt aenean netus et sit. Id odio id in eu semper eu mattis
            tristique sit. Facilisi egestas urna sagittis sed donec. Sed orci
            dolor donec laoreet hendrerit. Adipiscing faucibus mi ut sagittis
            et. In etiam aenean sollicitudin libero eu ac lacus urna eget. Ac
            eget sed lectus diam. Laoreet semper viverra a in ornare velit in
            elementum. Ipsum interdum nunc scelerisque consequat phasellus
            viverra ultrices pellentesque tempus. Condimentum pellentesque enim
            duis lorem eget id sed ac eu. Sodales morbi vitae nunc aliquet nibh
            diam. Egestas quam purus venenatis sagittis pretium at nulla at.
            Tortor magnis tempus nunc mauris id at blandit varius. Feugiat arcu
            facilisis sit cras volutpat nisl odio in. Nunc gravida quam amet
            proin et eu tortor fusce. Cursus eget in cursus blandit sed. Dui
            arcu aenean scelerisque senectus viverra. Molestie non ipsum congue
            dolor est odio. Sit ultricies lectus vitae porttitor dictum diam
            ullamcorper. Eu nulla ut nisi velit quis nullam nisi viverra. Non
            dolor malesuada in dolor ac nulla ornare sagittis. Cursus in
            vestibulum viverra vitae sit egestas ullamcorper libero nunc. Nibh
            praesent quam adipiscing faucibus in a. Accumsan interdum ante a
            arcu tellus ultricies semper tellus dolor.
            <p></p>
            Lorem ipsum dolor sit amet consectetur. Quam luctus nulla morbi
            tincidunt aenean netus et sit. Id odio id in eu semper eu mattis
            tristique sit. Facilisi egestas urna sagittis sed donec. Sed orci
            dolor donec laoreet hendrerit. Adipiscing faucibus mi ut sagittis
            et. In etiam aenean sollicitudin libero eu ac lacus urna eget. Ac
            eget sed lectus diam. Laoreet semper viverra a in ornare velit in
            elementum. Ipsum interdum nunc scelerisque consequat phasellus
            viverra ultrices pellentesque tempus. Condimentum pellentesque enim
            duis lorem eget id sed ac eu. Sodales morbi vitae nunc aliquet nibh
            diam. Egestas quam purus venenatis sagittis pretium at nulla at.
            Tortor magnis tempus nunc mauris id at blandit varius. Feugiat arcu
            facilisis sit cras volutpat nisl odio in. Nunc gravida quam amet
            proin et eu tortor fusce. Cursus eget in{" "}
          </p>
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
    font-size: 72px;
    font-weight: 600;
    line-height: 80px;
    padding: 30px 0;
  }
  p,
  h6,
  h2 {
    font-family: "GeneralSans-Variable";
  }
  h6 {
    font-size: 16px;
    font-weight: 400;
  }
  p,
  h6 {
    font-size: 16px;
  }
  .blog_container p {
    padding-bottom: 20px;
    text-align: justify;
  }
  span {
    font-family: "Product Sans Medium";
  }
  .blog_container {
    padding: 50px 0 100px 0;
  }
  .blog_container img {
    padding: 20px 0;
    width: 100%;
    object-fit: contain;
  }
`;

export default SingleBlog;

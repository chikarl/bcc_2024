import React, { useState, useEffect } from "react";
import BlogNavbar from "../components/BlogNavbar";
// import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Loading from "../components/Loading";

function SingleBlog() {
  const { blog_id } = useParams();
  const [singlePost, setSinglePost] = useState({});
  const [imageUrl, setImageUrl] = useState("");
  const [author, setAuthor] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://blog.alouzehbrandone.com/wp-json/wp/v2/posts/${blog_id}`
      )
      .then((res) => {
        setSinglePost(res.data);
        setIsLoaded(true);
      })
      .catch((err) => console.log(err));
  }, [blog_id]);

  useEffect(() => {
    if (!singlePost || !singlePost.featured_media || !singlePost.author) return;

    const { featured_media, author: authorId } = singlePost;

    const getImageUrl = axios.get(
      `https://blog.alouzehbrandone.com/wp-json/wp/v2/media/${featured_media}`
    );
    const getAuthor = axios.get(
      `https://blog.alouzehbrandone.com/wp-json/wp/v2/users/${authorId}`
    );

    Promise.all([getImageUrl, getAuthor]).then(([imageUrlRes, authorRes]) => {
      setImageUrl(imageUrlRes.data.media_details.sizes.full.source_url);
      setAuthor(authorRes.data.name);
    });
  }, [singlePost]);

  if (!isLoaded) {
    return <Loading />;
  }

  const { title, content } = singlePost;

  return (
    <Wrapper>
      <div>
        <div
          className="blog-header"
          style={{ backgroundColor: singlePost?.acf?.bg_color }}>
          <div className="container" style={{ color: singlePost?.acf?.color }}>
            <BlogNavbar blog={singlePost} />
            <div className="blog-info">
              <div className="flex-row header">
                <div className="flex-col">
                  <h6>Blog</h6>
                  <h2>{title?.rendered}</h2>
                  <p>
                    by <span>{author}</span>
                  </p>
                </div>
                <div>
                  <img src={imageUrl} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blog_container">
          <div dangerouslySetInnerHTML={{ __html: content?.rendered }} />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .blog-header {
    height: 90vh;
  }
  .blog-header .container .blog-info {
    height: calc(100vh - 260px);
  }
  .flex-row {
    align-items: center;
    height: 100%;
  }
  .flex-row.header > div {
    width: 50%;
  }
  .flex-row img {
    width: 100%;
    object-fit: cover;
  }
  h2 {
    font-size: 52px;
    font-weight: 600;
    line-height: 60px;
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
// SingleBlog.propTypes = {
//   posts: PropTypes.object.isRequired,
// };
export default SingleBlog;

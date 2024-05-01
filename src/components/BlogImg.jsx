import React, { useState, useEffect } from "react";
import axios from "axios";

function BlogImg({ featured_media }) {
  const [imgUrl, setImgUrl] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    axios
      .get(
        `https://bcc.christmastreeemporium.com/wp-json/wp/v2/media/${featured_media}`
      )
      .then((res) => {
        setImgUrl(res.data.media_details.sizes.full.source_url);
        setIsLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(imgUrl);
  if (!isLoaded) {
    return null;
  }
  return <img src={imgUrl} alt="" />;
}

export default BlogImg;

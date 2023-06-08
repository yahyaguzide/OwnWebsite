import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import * as style from "./style";

function BlogElement({ data }) {
  const { imagePath, title, alt } = data.frontmatter;
  const image = getImage(imagePath);

  return (
    <style.BlogElement>
      <GatsbyImage image={image} alt={title}></GatsbyImage>
      <style.blogText>
        <p>{title}</p>
        <p>{alt}</p>
      </style.blogText>
    </style.BlogElement>
  );
}

export default BlogElement;

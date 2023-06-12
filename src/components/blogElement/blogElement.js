import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import * as style from './style'

function BlogElement({ title, summary, tags = [] }) {
  return (
    <>
      <style.blogContainer>
        <style.blogImage>
          <StaticImage
            src="https://picsum.photos/250/200"
            alt="Test Image Blog"
            placeholder="blurred"
            layout="constrained"
            width={150}
            height={100}
          />
        </style.blogImage>
        <style.blogTitle>
          <p>{title}</p>
          <style.tagContainer>
            {tags.map((t) => {
              return <style.tag>{t}</style.tag>
            })}
          </style.tagContainer>
        </style.blogTitle>
        <style.blogText className="blogText">{summary}</style.blogText>
      </style.blogContainer>
    </>
  )
}

export default BlogElement

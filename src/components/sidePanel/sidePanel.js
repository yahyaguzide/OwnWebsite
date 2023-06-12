import React from 'react'
import * as style from './style'
import BlogElement from '../blogElement/blogElement'

function SidePanel() {
  return (
    <div>
      <BlogElement
        title="Test1"
        summary="lorem ipsum"
        tags={['new', 'interesting']}
      />
      <BlogElement
        title="Test2"
        summary="lorem ipsum"
        tags={['new', 'interesting']}
      />
      <BlogElement
        title="Test3"
        summary="lorem ipsum"
        tags={['new', 'interesting']}
      />
    </div>
  )
}

export default SidePanel

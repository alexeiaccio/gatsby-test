import React from "react"
import g from "glamorous"
import { css } from "glamor"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <div>
      <g.H1
        color={'pink'}
      >
        {post.frontmatter.title}
      </g.H1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
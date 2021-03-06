import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              publicURL
              extension
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename)
      })

      if (!image) {
        return null
      }
      const { childImageSharp, extension, publicURL } = image.node
      if (!childImageSharp && extension === 'svg') {
        return <img className={props.className} src={publicURL} alt={props.alt} />
      }
      const imageFluid = image.node.childImageSharp.fluid
      return <Img alt={props.alt} fluid={imageFluid} className={props.className} />
    }}
  />
)
export default Image
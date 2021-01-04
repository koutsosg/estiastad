import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
const CoverCss = styled(Img)`
  @media (max-width: 768px) {
    min-height: 35vh;
  }
`

const Cover = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "welcome.webp" }) {
        childImageSharp {
          fluid(maxWidth: 1903, maxHeight: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return (
    <CoverCss fluid={data.placeholderImage.childImageSharp.fluid}></CoverCss>
  )
}

export default Cover

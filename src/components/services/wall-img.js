import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const WallImage = styled(Img)`
  min-width: 50%;
  float: left;
`

const WallImg = () => {
  const data = useStaticQuery(graphql`
    query {
      wall: file(relativePath: { eq: "wall-washing.webp" }) {
        childImageSharp {
          fluid(maxWidth: 862, maxHeight: 440) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)

  if (!data?.wall?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return <WallImage fluid={data.wall.childImageSharp.fluid}></WallImage>
}

export default WallImg

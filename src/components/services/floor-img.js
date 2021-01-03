import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const FloorService = styled(Img)`
  min-width: 50%;
  flex-grow: 1;
`

const FloorImg = () => {
  const data = useStaticQuery(graphql`
    query {
      floor: file(relativePath: { eq: "floor-washing.webp" }) {
        childImageSharp {
          fluid(maxWidth: 862, maxHeight: 440) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)

  if (!data?.floor?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return <FloorService fluid={data.floor.childImageSharp.fluid}></FloorService>
}

export default FloorImg

import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const HouseImage = styled(Img)`
  min-width: 50%;
  float: left;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const HouseImg = () => {
  const data = useStaticQuery(graphql`
    query {
      house: file(relativePath: { eq: "house-cleaning.webp" }) {
        childImageSharp {
          fluid(maxWidth: 862, maxHeight: 440) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)

  if (!data?.house?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return <HouseImage fluid={data.house.childImageSharp.fluid}></HouseImage>
}

export default HouseImg

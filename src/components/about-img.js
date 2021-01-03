import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const AboutImage = styled(Img)`
  border-radius: 50%;
  display: block;
  margin: auto;
`

const AboutImg = () => {
  const data = useStaticQuery(graphql`
    query {
      about: file(relativePath: { eq: "about.webp" }) {
        childImageSharp {
          fluid(maxWidth: 300, maxHeight: 300) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)

  if (!data?.about?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return <AboutImage fluid={data.about.childImageSharp.fluid}></AboutImage>
}

export default AboutImg

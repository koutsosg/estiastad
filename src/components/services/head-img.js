import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ServiceImage = styled(Img)`
  width: 100%;
`

const HeadImg = () => {
  const data = useStaticQuery(graphql`
    query {
      headservice: file(relativePath: { eq: "services.webp" }) {
        childImageSharp {
          fluid(maxWidth: 1903, maxHeight: 480) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.headservice?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return (
    <ServiceImage fluid={data.headservice.childImageSharp.fluid}></ServiceImage>
  )
}

export default HeadImg

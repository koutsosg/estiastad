import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Cover = () => {
    const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "welcome.webp" }) {
        childImageSharp {
          fluid(maxWidth: 1263, maxHeight: 400) {
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

  <Img fluid={data.placeholderImage.childImageSharp.fluid} />
 

  )
  
}

export default Cover
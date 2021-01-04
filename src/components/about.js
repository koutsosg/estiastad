import React from "react"
import styled from "styled-components"
import AboutImg from "./about-img"
const AboutSection = styled.div`
  background-color: #505554;
  text-align: center;
  padding: 5vh;
  color: white;

  @media (max-width: 768px) {
    padding: 5vh;
  }
`
const Header = styled.h2`
  color: #ffffff;
  font-size: 2.5vw;
  margin: 0 0 20px 0;
  padding: 20px 0 0 0;
  @media (max-width: 768px) {
    padding: 0;
    font-size: 6vw;
  }
`
const Header2 = styled.p`
color: #ffffff;
font-size: 1.5vw;
@media (max-width: 768px) {
font-size: 6vw;

`
const Paragraph = styled.p`
  color: #ffffff;
  text-align: justify;
  font-size: 1vw;

  margin: 0 auto;
  max-width: 1080px;

  @media (max-width: 768px) {
    font-size: 3vw;
  }
`

const About = () => {
  return (
    <AboutSection>
      <AboutImg />
      <Header>About</Header>
      <Header2>Honest & Efficient Work</Header2>
      <Paragraph>
        Fast, efficient, and honest, estia städ has become a reputable and
        well-known service provider. Our team is up for every job, managing
        projects with the skill and experience our clients have come to expect.
        We want our customers to be satisfied with our work, which is why we
        provide open communication channels throughout the duration of each
        project.
      </Paragraph>
    </AboutSection>
  )
}

export default About

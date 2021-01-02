import React from "react"
import styled from "styled-components"

const AboutSection = styled.div`
background-color: #505554;
text-align: center;
padding: 11vh;
color: white;

@media (max-width: 768px) {
padding: 5vh;
}
`
const Header = styled.h2`
color: #ffffff;
font-size: 2.5vw;
margin: 0 0 20px 0;
@media (max-width: 768px) {
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
font-size: 1.5vw;
margin: 0 0 60px 0;
 margin: 0 auto;
        max-Width: 780px;
        padding: 1.45rem 1.0875rem;
@media (max-width: 768px) {
font-size: 2.5vw;
}
`

const CallButton = styled.a`
color: #ffffff;
cursor: pointer;
border-radius: 20vh;
border-style: solid;
background-color: #505554;
border-color: #ffffff;
border-width: 1px;
padding: 1vh;
font-size: 1.5vw;
@media (max-width: 768px) {
font-size: 3vw;
}

:hover {
    background-color: #ffffff;
    color: #000000;
    transition: all 0.3s ease-in;
}
`

const About =() => {
    return(
        <AboutSection>
        <Header>About</Header>
        <Header2>Honest & Efficient Work</Header2>
        <Paragraph>Fast, efficient, and honest, estia städ has become a reputable and well-known service provider. Our team is up for every job, managing projects with the skill and experience our clients have come to expect. We want our customers to be satisfied with our work, which is why we provide open communication channels throughout the duration of each project.</Paragraph>
        <CallButton href="tel:+0046732570047">Get In Touch</CallButton>
        </AboutSection>
    )
}

export default About
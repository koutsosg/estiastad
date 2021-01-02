import React from "react"
import styled from "styled-components"

const WelcomeSection = styled.div`
background-color: #9a998e;
text-align: center;
padding: 11vh;

@media (max-width: 768px) {
padding: 5vh;
}
`
const Header = styled.h1`
color: #505554;
font-size: 4vw;
margin: 0 0 20px 0;
@media (max-width: 768px) {
font-size: 6vw;
}

`
const Paragraph = styled.p`
color: #000000;
font-size: 1.5vw;
margin: 0 0 60px 0;
@media (max-width: 768px) {
font-size: 2vw;
}
`

const CallButton = styled.a`
color: black;
cursor: pointer;
border-radius: 20vh;
border-style: solid;
background-color: #9a998e;
border-color: #000000;
border-width: 1px;
padding: 1vh;
font-size: 1.5vw;
@media (max-width: 768px) {
font-size: 3vw;
}

:hover {
    background-color: #000000;
    color: #9a998e;
    transition: all 0.3s ease-in;
}
`

const Welcome =() => {
    return(
        <WelcomeSection>
        <Header>WELCOME TO ESTIA STÄD</Header>
        <Paragraph>Always at Your Service</Paragraph>
        <CallButton href="tel:+0046732570047">Get In Touch</CallButton>
        </WelcomeSection>
    )
}

export default Welcome
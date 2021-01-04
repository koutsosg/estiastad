import React from "react"
import styled from "styled-components"
import OverlayImage from "../overlay"
import HeadImg from "./head-img"
const ServiceContainer = styled.div`
  position: relative;
  text-align: center;
  color: white;

  @media (max-width: 768px) {
    padding: 1vh;
  }
`
const Text = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2vw;

  @media (max-width: 768px) {
    font-size: 6vw;
  }
`
const Head = () => {
  return (
    <ServiceContainer>
      <HeadImg />
      <OverlayImage />
      <Text>PROFESSIONAL SERVICES</Text>
    </ServiceContainer>
  )
}

export default Head

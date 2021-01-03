import React from "react"
import styled from "styled-components"
import FloorImg from "../services/floor-img"

const FloorText = styled.div`
  background-color: #9a998e;
  float: left;
`

const FloorSection = styled.div`
  display: flex;
  background-color: #505554;
  text-align: center;
  padding: 1vh;
  color: white;

  @media (max-width: 768px) {
    padding: 5vh;
  }
`

const FloorHeader = styled.h3`
color: #ffffff;
font-size: 2vw;
@media (max-width: 768px) {
font-size: 6vw;

`
const FloorParagraph = styled.p`
  color: #ffffff;
  text-align: justify;
  font-size: 1.5vw;
  padding: 0 10%;
  @media (max-width: 768px) {
    font-size: 2.5vw;
  }
`
const FloorClean = () => {
  return (
    <FloorSection>
      <FloorText>
        <FloorHeader>FLOOR CLEANING</FloorHeader>
        <FloorParagraph>
          We have the experience and skills necessary to tackle just about every
          type of job that comes our way. With estia städ, clients know exactly
          what to expect - professionalism, efficiency and exceptional results.
        </FloorParagraph>
      </FloorText>
      <FloorImg />
    </FloorSection>
  )
}
export default FloorClean

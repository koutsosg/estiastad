import React from "react"
import styled from "styled-components"
import FloorImg from "../services/floor-img"

const FloorText = styled.div`
  background-color: #9a998e;
  width: 50%;
  float: right;
  flex-grow: 1;

  @media (max-width: 768px) {
    float: left;
    width: 100%;
  }
  @media (min-width: 768px) {
    min-height: 100%;
    padding: 5% 0;
  }
`

const FloorSection = styled.div`
  display: flex;
  background-color: #505554;
  text-align: center;
  padding: 1vh;
  color: white;
  @media (max-width: 768px) {
    padding: 1vh;
  }
`

const FloorHeader = styled.h3`
color: #ffffff;
font-size: 1.5vw;
padding: 0 0;

@media (max-width: 768px) {
font-size: 4.5vw;

`
const FloorParagraph = styled.p`
  color: #ffffff;
  text-align: justify;
  font-size: 1vw;
  padding: 0 5%;

  @media (max-width: 768px) {
    font-size: 2.5vw;
  }
`
const FloorClean = () => {
  return (
    <FloorSection>
      <div>
        <FloorImg />
        <FloorText>
          <FloorHeader>Floor Cleaning</FloorHeader>
          <FloorParagraph>
            Since its founding, estia städ has been one of the most trusted
            names in the industry. Hire us for this service and learn how we
            cater to the needs of each client, ensuring the results you need and
            deserve.
          </FloorParagraph>
        </FloorText>
      </div>
    </FloorSection>
  )
}
export default FloorClean

import React from "react"
import styled from "styled-components"
import WallImg from "../services/wall-img"

const WallText = styled.div`
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

const WallSection = styled.div`
  display: flex;
  background-color: #505554;
  text-align: center;
  padding: 1vh;
  color: white;
  @media (max-width: 768px) {
    padding: 1vh;
  }
`

const WallHeader = styled.h3`
color: #ffffff;
font-size: 1.5vw;
padding: 0 0;

@media (max-width: 768px) {
font-size: 4.5vw;

`
const WallParagraph = styled.p`
  color: #ffffff;
  text-align: justify;
  font-size: 1vw;
  padding: 0 5%;

  @media (max-width: 768px) {
    font-size: 2.5vw;
  }
`
const WallClean = () => {
  return (
    <WallSection>
      <div>
        <WallImg />
        <WallText>
          <WallHeader>Wall Cleaning</WallHeader>
          <WallParagraph>
            estia städ is committed to getting the job done, especially when it
            comes to this service. You can count on us to be professional,
            timely, efficient and make sure you’re satisfied every step of the
            way.
          </WallParagraph>
        </WallText>
      </div>
    </WallSection>
  )
}
export default WallClean

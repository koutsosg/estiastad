import React from "react"
import styled from "styled-components"
import WallImg from "../services/wall-img"

const WallText = styled.div`
  background-color: #9a998e;

  flex-grow: 1;
`

const WallSection = styled.div`
  display: flex;
  background-color: #505554;
  text-align: center;
  padding: 1vh;
  color: white;

  @media (max-width: 768px) {
    padding: 5vh;
  }
`

const WallHeader = styled.h3`
color: #ffffff;
font-size: 2vw;
@media (max-width: 768px) {
font-size: 6vw;

`
const WallParagraph = styled.p`
  color: #ffffff;
  text-align: justify;
  font-size: 1.5vw;
  padding: 0 10%;
  @media (max-width: 768px) {
    font-size: 2.5vw;
  }
`
const WallClean = () => {
  return (
    <WallSection>
      <WallImg />
      <WallText>
        <WallHeader>WALL CLEANING</WallHeader>
        <WallParagraph>
          We have the experience and skills necessary to tackle just about every
          type of job that comes our way. With estia städ, clients know exactly
          what to expect - professionalism, efficiency and exceptional results.
        </WallParagraph>
      </WallText>
    </WallSection>
  )
}
export default WallClean

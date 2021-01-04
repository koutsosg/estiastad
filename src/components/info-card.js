import React from "react"
import styled from "styled-components"
import Social from "./social"
const InfoContain = styled.div`
  background-color: #505554;
`
const InfoContain2 = styled.div`
  background-color: #505554;
  max-width: 100%;
`

const Front = styled.div`
  background-color: black;
  color: white;
`
const Test2 = styled.div`
  background-color: #9a998e;
  color: black;
`

const Testh3 = styled.div`
  position: absolute;
  bottom: 8px;
  left: 16px;
`

const Text = styled.p`
  @media (max-width: 768px) {
    font-size: 3vw;
    margin-bottom: 0px;
  }
`
const Tele = styled.a`
  @media (max-width: 768px) {
    font-size: 3vw;
    margin-bottom: 0px;
  }
`
const Title = styled.h3`
  @media (max-width: 768px) {
    font-size: 4vw;
    margin-top: 5%;
  }
`

const InfoCard = () => {
  return (
    <InfoContain className="py-2">
      <InfoContain2 className="text-center container">
        <div className="card card-flip row">
          <Front className="card-front text-white ">
            <div className="card-body">
              <Testh3 className="card-title text-white">estia</Testh3>
            </div>
          </Front>
          <Test2 className="card-back">
            <div className="card-body">
              <Title className="card-title">Estia Städ AB</Title>
              <Text className="card-text">
                Vintergatan 16, 244 62 Furulund, Sverige
              </Text>

              <Tele className="card-text" href="tel:+0046732570047">
                +0046732570047
              </Tele>
              <Social />
            </div>
          </Test2>
        </div>
      </InfoContain2>
    </InfoContain>
  )
}
export default InfoCard

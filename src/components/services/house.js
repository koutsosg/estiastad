import React from "react";
import styled from "styled-components";
import HouseImg from "../services/house-img";

const HouseText = styled.div`
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
`;

const HouseSection = styled.div`
  display: flex;
  background-color: #505554;
  text-align: center;
  padding: 2vh 1vh 1vh 1vh;
  color: white;
  @media (max-width: 768px) {
  }
`;

const HouseHeader = styled.h3`
color: #ffffff;
font-size: 1.5vw;
padding: 0 0;

@media (max-width: 768px) {
font-size: 4.5vw;

`;
const HouseParagraph = styled.p`
  color: #ffffff;
  text-align: justify;
  font-size: 1vw;
  padding: 0 5%;

  @media (max-width: 768px) {
    font-size: 2.5vw;
  }
`;
const HouseClean = () => {
  return (
    <HouseSection data-aos="fade-right">
      <div>
        <HouseImg />
        <HouseText>
          <HouseHeader>House Cleaning</HouseHeader>
          <HouseParagraph>
            We have the experience and skills necessary to tackle just about
            every type of job that comes our way. With estia städ, clients know
            exactly what to expect - professionalism, efficiency and exceptional
            results.
          </HouseParagraph>
        </HouseText>
      </div>
    </HouseSection>
  );
};
export default HouseClean;

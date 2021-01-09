import React from "react";
import styled from "styled-components";
import OverlayImage from "../overlay";
import HeadImg from "./head-img";
import { Trans } from "gatsby-plugin-react-i18next";
const ServiceContainer = styled.div`
  position: relative;
  text-align: center;
  color: white;

  @media (max-width: 768px) {
    padding: 1vh;
  }
`;
const Text = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2vw;

  @media (max-width: 768px) {
    font-size: 6vw;
  }
`;
const Head = () => {
  return (
    <ServiceContainer
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
    >
      <HeadImg />
      <OverlayImage />
      <Text>
        <Trans>PROFESSIONAL SERVICES</Trans>
      </Text>
    </ServiceContainer>
  );
};

export default Head;

import React from "react";
import styled from "styled-components";
import Cover from "../components/cover";
import { Trans } from "gatsby-plugin-react-i18next";

const WelcomeSection = styled.div`
  background-color: #9a998e;
  text-align: center;
  padding: 0 0 11vh 0;

  @media (max-width: 768px) {
    position: relative;
    text-align: center;
    padding: 0;
  }
`;
const Header = styled.h1`
  color: #000000;
  font-size: 4vw;
  margin: 0 0 20px 0;
  @media (max-width: 768px) {
    font-size: 5vw;
    margin: 0 0 0 0;
  }
`;
const Paragraph = styled.p`
  color: #000000;
  font-size: 2vw;
  margin: 0 0 60px 0;
  @media (max-width: 768px) {
    font-size: 4vw;
    margin: 5px;
  }
`;

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
    font-size: 2.5vw;
  }

  :hover {
    background-color: #000000;
    color: #9a998e;
    transition: all 0.3s ease-in;
  }
`;
const Wel = styled.div`
  padding: 11vh 0 1vh 0;
  @media (max-width: 768px) {
    position: absolute;
    top: 30%;
    left: 19%;
    transform: translate(-15%, -15%);
    padding: 0;
  }
`;

const Welcome = () => {
  return (
    <WelcomeSection>
      <Cover />

      <Wel data-aos="fade-up">
        <Header>
          <Trans>WELCOME TO ESTIA STÄD</Trans>
        </Header>
        <Paragraph>
          <Trans>Always at Your Service</Trans>
        </Paragraph>
        <CallButton href="tel:+0046732570047">
          <Trans>Get In Touch</Trans>
        </CallButton>
      </Wel>
    </WelcomeSection>
  );
};

export default Welcome;

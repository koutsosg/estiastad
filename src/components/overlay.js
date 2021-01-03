import React from "react"
import styled from "styled-components"

const Overlay = styled.div`
  position: absolute;
 top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height:100%;
  background-color:#505554;
  opacity: 0.4;
  @media (max-width: 768px) {
font-size: 6vw;

`
const OverlayImage = () => {
  return <Overlay></Overlay>
}

export default OverlayImage

import React from "react"
import styled from "styled-components"

const InfoContain = styled.div`
  background-color: #505554;
`

const Test1 = styled.div`
  background-color: black;
  color: white;
  min-height: 40vh;
`
const Test2 = styled.div`
  background-color: #9a998e;
`

const Testh3 = styled.div`
  position: absolute;
  bottom: 8px;
  left: 16px;
`

const InfoCard = () => {
  return (
    <InfoContain className="">
      <InfoContain className="text-center p-5 container">
        <div className="card card-flip h-100 row">
          <Test1 className="card-front text-white ">
            <div className="card-body">
              <Testh3 className="card-title text-white">estia</Testh3>
            </div>
          </Test1>
          <Test2 className="card-back">
            <div className="card-body">
              <h3 className="card-title">Back</h3>
              <p className="card-text">
                Suprise this one has more more more more content on the back!
              </p>
            </div>
          </Test2>
        </div>
      </InfoContain>
    </InfoContain>
  )
}
export default InfoCard

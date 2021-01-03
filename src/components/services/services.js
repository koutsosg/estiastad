import React from "react"
import FloorClean from "./floor"
import HouseClean from "./house"
import WallClean from "./wall"
import Head from "./head"

const Services = () => {
  return (
    <div>
      <Head />
      <HouseClean />
      <FloorClean />
      <WallClean />
    </div>
  )
}
export default Services

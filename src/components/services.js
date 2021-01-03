import React from "react"
import FloorClean from "../components/services/floor"
import HouseClean from "../components/services/house"
import WallClean from "../components/services/wall"
import Head from "../components/services/head"

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

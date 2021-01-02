import React from "react"
import FloorClean from "./floor"
import HouseClean from "./house"
import WallClean from "./wall"

const Services = () => {
    return(
        <div>
        <h1>services</h1>
        <HouseClean />
        <FloorClean />
        <WallClean />
        </div>
    )
}
export default Services
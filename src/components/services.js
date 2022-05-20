import React from "react";
import FloorClean from "../components/services/floor";
import HouseClean from "../components/services/house";
import WallClean from "../components/services/wall";
import Head from "../components/services/head";
import OmgServices2 from "omgad-component/lib/OmgServices2";
import WallImg from "../images/wall-washing.webp";
const bcolor = "#f8f9fa";

const classes = {
  maindiv: "bg-light omg-maindiv p-5",
  container: "container p-0",
  info: "omg-info",
  infoimg: "omg-info_img",
  overlay: "omg-overlay_img",
  infotext: "omg-info_text",
  infotexth: "",
  services: "",
  maingrid: "omg-grid_main",
  gridleft: "",
  servimg: "",
  gridright: "",
  servhead: "",
  span: "",
  servtext: "",
};

const info = {
  title: "R",
  /* img: headimg, */
};

const services = [
  {
    img: WallImg,
    title: "service1",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    /*  img: service2, */
    title: "service2",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    /*   img: service3, */
    title: "service3",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Services = () => {
  return (
    <div>
      <Head />
      <HouseClean />
      <FloorClean />
      <WallClean />
      {/*  <OmgServices2
        color={bcolor}
        info={info}
        services={services}
        classes={classes}
      /> */}
    </div>
  );
};
export default Services;

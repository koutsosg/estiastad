import React from "react"
import { Link } from "gatsby"
import Cover from "../components/cover"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Welcome from "../components/welcome"
import About from "../components/about"
import Services from "../components/services"
import InfoCard from "../components/info-card"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Welcome />
    <About />
    <Services />
    <InfoCard />
  </Layout>
)

export default IndexPage

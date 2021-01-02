import React from "react"
import { Link } from "gatsby"
import Cover from "../components/cover"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import MyForm from "../components/myform"
import Welcome from "../components/welcome"
import About from "../components/about"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
     <Cover />
     <Welcome />
     <About />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
     
      <Image />
      <MyForm />
    </div>
    
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage

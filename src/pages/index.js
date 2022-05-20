import React, { useEffect } from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";

import Layout from "../components/layout";

import SEO from "../components/seo";
import About from "../components/about";
import Welcome from "../components/welcome";
import Services from "../components/Services";
import InfoCard from "../components/info-card";

import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

const IndexPage = () => {
  let AOS;

  useEffect(() => {
    /**
     * Server-side rendering does not provide the 'document' object
     * therefore this import is required either in useEffect or componentDidMount as they
     * are exclusively executed on a client
     */
    const AOS = require("aos");
    AOS.init({
      once: true,
    });
  }, []);

  useEffect(() => {
    if (AOS) {
      AOS.refresh();
    }
  });

  const { t } = useTranslation();
  return (
    <Layout>
      <SEO title={t("Home")} />

      <Welcome />

      <About />

      <Services />
      <InfoCard />
    </Layout>
  );
};

export default IndexPage;

const { languages, defaultLanguage } = require("./languages");

module.exports = {
  siteMetadata: {
    title: `Estia Stad AB`,
    description: `Fast, efficient, and honest, estia städ has become a reputable and well-known service provider.`,
    author: `@ohmygad`,
    siteUrl: "https://kind-lichterman-5edcb4.netlify.app",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
       options: {
        name: `Estia Stad AB`,
        short_name: `estia`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#505554`,
        display: `minimal-ui`,
        icon: `src/images/estia-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat`,
          `source sans pro\:100,200,300,400,400i,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    {
      // including a plugin from outside the plugins folder needs the path to it
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        languages,
        defaultLanguage,
        path: `${__dirname}/locales`,
        siteUrl: "https://kind-lichterman-5edcb4.netlify.app",
        i18nextOptions: {
          debug: true,
          lowerCaseLng: true,
          saveMissing: false,
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
          keySeparator: false,
          nsSeparator: false,
        },
        pages: [
          {
            matchPath: "/ignored-page",
            languages: ["en"],
          },
        ],
      },
    },
    `gatsby-plugin-fontawesome-css`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        exclude: ["/**/404", "/**/404.html"],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage(filter: {context: {i18n: {routed: {eq: false}}}}) {
              edges {
                node {
                  context {
                    i18n {
                      defaultLanguage
                      languages
                      originalPath
                    }
                  }
                  path
                }
              }
            }
          }
        `,
        serialize: ({ site, allSitePage }) => {
          return allSitePage.edges.map((edge) => {
            const {
              languages,
              originalPath,
              defaultLanguage,
            } = edge.node.context.i18n;
            const { siteUrl } = site.siteMetadata;
            const url = siteUrl + originalPath;
            const links = [
              { lang: defaultLanguage, url },
              { lang: "x-default", url },
            ];
            languages.forEach((lang) => {
              if (lang === defaultLanguage) return;
              links.push({ lang, url: `${siteUrl}/${lang}${originalPath}` });
            });
            return {
              url,
              changefreq: "daily",
              priority: originalPath === "/" ? 1.0 : 0.7,
              links,
            };
          });
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
};

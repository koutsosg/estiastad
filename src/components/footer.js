import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = () => (
  <footer
    style={{
      background: `black`,

      color: `white`,
      textDecoration: `none`,
    }}
  >
    <div
      className="text-center"
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      © {new Date().getFullYear()},
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        &nbsp;Estia städ AB
      </Link>
      .&nbsp;All Rights Reserved
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer

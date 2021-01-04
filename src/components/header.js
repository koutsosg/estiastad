import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Title = styled.h1`
  @media (max-width: 768px) {
    text-align: center;
  }
`

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `black`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1480,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Title style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </Title>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

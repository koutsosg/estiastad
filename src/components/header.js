import { Link, useI18next } from "gatsby-plugin-react-i18next";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import "./header.css";

const Title = styled.h1`
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Header = ({ siteTitle }) => {
  const { languages, originalPath } = useI18next();
  return (
    <header
      className="main-header"
      style={{
        background: `black`,
      }}
    >
      <div
        style={{
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
      <ul className="languages">
        {languages.map((lng) => (
          <li key={lng}>
            <Link to={originalPath} language={lng}>
              {lng}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};
Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
